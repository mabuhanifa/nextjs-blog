import Link from "next/link";
import {
  LayoutDashboard,
  PlusSquare,
  Folder,
  Upload,
  Settings,
  Plus,
  Search,
  Edit3,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const tableData = [
  {
    title: "On the Nature of Forgotten Knowledge",
    category: "Philosophy",
    date: "Nov 24, 2024",
    status: "PUBLISHED",
    statusColor: "bg-green-900/50 text-green-400 border-green-800",
  },
  {
    title: "Wandering Through the Scottish Highlands",
    category: "Travel",
    date: "Nov 18, 2024",
    status: "PUBLISHED",
    statusColor: "bg-green-900/50 text-green-400 border-green-800",
  },
  {
    title: "The Architecture of Memory Palaces",
    category: "Writing",
    date: "Nov 10, 2024",
    status: "DRAFT",
    statusColor: "bg-yellow-900/50 text-yellow-400 border-yellow-800",
  },
  {
    title: "Notes from the Bodleian",
    category: "Travel",
    date: "Nov 05, 2024",
    status: "DRAFT",
    statusColor: "bg-yellow-900/50 text-yellow-400 border-yellow-800",
  },
];

const sidebarNav = [
  { icon: LayoutDashboard, label: "Dashboard", active: true, href: "/dashboard" },
  { icon: PlusSquare, label: "Create Post", active: false, href: "/dashboard/create" },
  { icon: Folder, label: "Manage", active: false, href: "#" },
  { icon: Upload, label: "Uploads", active: false, href: "#" },
  { icon: Settings, label: "Settings", active: false, href: "#" },
];

export default function DashboardSection() {
  return (
    <section id="dashboard" className="py-16 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="bg-stone-900 border border-stone-800 p-6 sticky top-24">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-stone-700">
                <div className="w-12 h-12 bg-stone-800 border border-stone-700 flex items-center justify-center">
                  <span className="font-serif text-lg text-amber-600">ST</span>
                </div>
                <div>
                  <div className="font-serif text-amber-50">
                    Sebastian Thorne
                  </div>
                  <div className="font-mono text-[10px] text-stone-500 tracking-wider">
                    ARCHIVIST
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {sidebarNav.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={i}
                      href={item.href}
                      className={
                        item.active
                          ? "flex items-center gap-3 px-3 py-2 border-l-2 border-amber-600 bg-stone-800/50 text-amber-50"
                          : "flex items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:border-stone-600 hover:bg-stone-800/30 text-stone-400 hover:text-stone-300 transition-colors"
                      }
                    >
                      <Icon
                        className={`w-4 h-4 ${item.active ? "text-amber-600" : ""}`}
                      />
                      <span className="font-mono text-xs tracking-wider">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-stone-700 space-y-4">
                <div>
                  <div className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">
                    Total Posts
                  </div>
                  <div className="font-serif text-2xl text-amber-50">47</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">
                    Drafts
                  </div>
                  <div className="font-serif text-2xl text-amber-50">12</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">
                    Views (30d)
                  </div>
                  <div className="font-serif text-2xl text-amber-50">
                    8,342
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="font-serif text-3xl text-amber-50">
                  Archive Ledger
                </h1>
                <p className="font-mono text-xs text-stone-500 mt-1 tracking-wider">
                  MANAGE YOUR ENTRIES
                </p>
              </div>
              <button className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-stone-950 font-mono text-xs tracking-widest uppercase px-4 py-2 transition-colors">
                <Plus className="w-4 h-4" />
                New Entry
              </button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search archives..."
                  className="w-full bg-stone-900 border border-stone-700 text-stone-300 pl-4 pr-10 py-3 font-mono text-sm focus:border-amber-700 focus:outline-none transition-colors placeholder:text-stone-600"
                />
                <Search className="w-4 h-4 text-stone-600 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
              <select className="bg-stone-900 border border-stone-700 text-stone-400 px-4 py-3 font-mono text-xs focus:border-amber-700 focus:outline-none">
                <option>All Categories</option>
                <option>Writing</option>
                <option>Travel</option>
                <option>Philosophy</option>
              </select>
              <select className="bg-stone-900 border border-stone-700 text-stone-400 px-4 py-3 font-mono text-xs focus:border-amber-700 focus:outline-none">
                <option>All Status</option>
                <option>Published</option>
                <option>Draft</option>
              </select>
            </div>

            {/* Data Table */}
            <div className="bg-stone-900 border border-stone-800 overflow-hidden">
              <table className="w-full">
                <thead className="bg-stone-800/50">
                  <tr>
                    <th className="text-left font-mono text-[10px] tracking-wider text-stone-500 uppercase px-4 py-3">
                      Title
                    </th>
                    <th className="text-left font-mono text-[10px] tracking-wider text-stone-500 uppercase px-4 py-3 hidden md:table-cell">
                      Category
                    </th>
                    <th className="text-left font-mono text-[10px] tracking-wider text-stone-500 uppercase px-4 py-3 hidden lg:table-cell">
                      Date
                    </th>
                    <th className="text-left font-mono text-[10px] tracking-wider text-stone-500 uppercase px-4 py-3">
                      Status
                    </th>
                    <th className="text-right font-mono text-[10px] tracking-wider text-stone-500 uppercase px-4 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800">
                  {tableData.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-stone-800/30 transition-colors"
                    >
                      <td className="px-4 py-4">
                        <span className="font-serif text-amber-50">
                          {row.title}
                        </span>
                      </td>
                      <td className="px-4 py-4 hidden md:table-cell">
                        <span className="font-mono text-xs text-stone-400">
                          {row.category}
                        </span>
                      </td>
                      <td className="px-4 py-4 hidden lg:table-cell">
                        <span className="font-mono text-xs text-stone-500">
                          {row.date}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-block font-mono text-[10px] tracking-wider px-2 py-1 border ${row.statusColor}`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-stone-500 hover:text-amber-500 transition-colors">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-stone-500 hover:text-red-500 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Pagination */}
            <div className="flex items-center justify-between mt-4">
              <span className="font-mono text-xs text-stone-500">
                Showing 1-4 of 47 entries
              </span>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-stone-700 text-stone-500 hover:border-amber-700 hover:text-amber-500 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-2 border border-stone-700 text-stone-500 hover:border-amber-700 hover:text-amber-500 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
