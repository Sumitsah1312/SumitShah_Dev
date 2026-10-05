import { useState } from 'react';
import { Server, Database, ShieldCheck, Cpu, Zap, FileCode } from 'lucide-react';

interface NodeSpec {
  id: string;
  title: string;
  badge: string;
  icon: any;
  color: string;
  borderColor: string;
  description: string;
  codeSnippet: string;
  techList: string[];
}

const ARCH_NODES: NodeSpec[] = [
  {
    id: 'auth',
    title: 'Security & Auth Layer',
    badge: 'ASP.NET Identity + JWT',
    icon: ShieldCheck,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    description: 'Intercepts incoming requests, validates JWT Bearer tokens, extracts tenant ID claims, and enforces fine-grained Role-Based Access Control (RBAC).',
    codeSnippet: `[Authorize(Roles = "HR_Admin, Manager")]
[HttpGet("api/v1/tenant/{tenantId}/leave-requests")]
public async Task<IActionResult> GetLeaveRequests(Guid tenantId) 
{
    var currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
    // Enforce Tenant & Resource Ownership Isolation
    return Ok(await _leaveService.GetFilteredRequestsAsync(tenantId, currentUserId));
}`,
    techList: ['JWT Bearer Tokens', 'Claims Principle', 'RBAC Middleware', 'Tenant Isolation'],
  },
  {
    id: 'api',
    title: 'REST API & Controller Layer',
    badge: '.NET 8 Web API',
    icon: Server,
    color: 'text-violet-400',
    borderColor: 'border-violet-500/40',
    description: 'Handles HTTP routing, request payload validation, standard DTO transformations, and global exception filter handling.',
    codeSnippet: `[HttpPost("loan-applications")]
public async Task<ActionResult<ApiResponse<LoanDto>>> CreateLoan([FromBody] CreateLoanCommand cmd)
{
    if (!ModelState.IsValid) return BadRequest(ModelState);
    var result = await _loanService.ProcessApplicationAsync(cmd);
    return CreatedAtAction(nameof(GetLoanStatus), new { id = result.Id }, result);
}`,
    techList: ['Controller Actions', 'Fluent Validation', 'Swagger / OpenAPI', 'Standardized API Wrappers'],
  },
  {
    id: 'service',
    title: 'Business Logic & Services',
    badge: 'C# Clean Service Layer',
    icon: Cpu,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/40',
    description: 'Executes state transitions, financial calculations, email dispatch queues, PDF rendering, and reusable domain rules.',
    codeSnippet: `public async Task<LoanSummaryDto> CalculateAggregationsAsync(DateTime startDate, DateTime endDate)
{
    return await _unitOfWork.Loans.Query()
        .Where(l => l.CreatedAt >= startDate && l.CreatedAt <= endDate)
        .GroupBy(l => l.Status)
        .Select(g => new LoanSummaryDto { Status = g.Key, Count = g.Count(), TotalAmount = g.Sum(x => x.Amount) })
        .FirstOrDefaultAsync();
}`,
    techList: ['Dependency Injection', 'LINQ Aggregations', 'Enum State Machines', 'Domain Events'],
  },
  {
    id: 'data',
    title: 'Data Access & ORM',
    badge: 'EF Core 8 + PostgreSQL',
    icon: Database,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    description: 'Translates LINQ expressions into optimized SQL queries, manages migrations, uses covering indexes, and prevents N+1 query overhead.',
    codeSnippet: `// EF Core Optimized Query with AsNoTracking & Projection
var employees = await _dbContext.Employees
    .AsNoTracking()
    .Include(e => e.Department)
    .Where(e => e.TenantId == tenantId && e.IsActive)
    .Select(e => new EmployeeListDto(e.Id, e.FullName, e.Department.Name))
    .ToListAsync();`,
    techList: ['Entity Framework Core', 'PostgreSQL Indexing', 'AsNoTracking Optimization', 'Code-First Migrations'],
  },
];

export default function ArchitectureDiagram() {
  const [selectedNode, setSelectedNode] = useState<NodeSpec>(ARCH_NODES[1]);
  const SelectedIcon = selectedNode.icon;

  return (
    <div className="w-full glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 my-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Backend System Blueprint</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Enterprise .NET 8 Backend Architecture
          </h3>
        </div>
        <div className="text-xs text-slate-400 font-mono bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 self-start md:self-auto">
          Click nodes below to inspect code & mechanics
        </div>
      </div>

      {/* Node Flow Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {ARCH_NODES.map((node) => {
          const NodeIcon = node.icon;
          const isSelected = selectedNode.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`p-4 rounded-xl text-left transition-all duration-200 border relative ${
                isSelected
                  ? `bg-[#181b28] ${node.borderColor} shadow-lg shadow-violet-900/20 scale-[1.02]`
                  : 'bg-[#12141d]/80 border-white/10 hover:border-white/20 hover:bg-[#161824]'
              }`}
            >
              {isSelected && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              )}
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-white/5 ${node.color}`}>
                  <NodeIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-400">{node.badge}</span>
              </div>
              <h4 className="text-sm font-bold text-white">{node.title}</h4>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details & Code Viewer */}
      <div className="rounded-xl bg-[#0b0c10] border border-white/10 p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Description column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-lg bg-white/5 ${selectedNode.color}`}>
              <SelectedIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400">{selectedNode.badge}</span>
              <h4 className="text-lg font-bold text-white">{selectedNode.title}</h4>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {selectedNode.description}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Core Technologies & Patterns
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedNode.techList.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/5 text-slate-300 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Code Snippet Column */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 rounded-t-xl bg-[#161824] border-t border-x border-white/10 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-violet-400" />
              <span>Production Implementation Pattern.cs</span>
            </div>
            <span className="text-[10px] text-cyan-400 font-bold">C# .NET 8</span>
          </div>
          <pre className="p-4 rounded-b-xl bg-[#08090d] border border-white/10 overflow-x-auto text-xs font-mono text-slate-200 leading-relaxed flex-1">
            <code>{selectedNode.codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
