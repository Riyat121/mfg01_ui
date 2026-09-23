// Copy shared by all three designs.

export const heroText =
  'mfg01 brings products, BOMs, manufacturing orders, inventory, procurement, quality and costing into one system built for makers — from raw material to finished goods.'

export const features = [
  { title: 'Product & Variants', text: 'Multi-level BOMs, versioned revisions, routed operations tied to work centers.' },
  { title: 'Procurement', text: 'Purchase orders, goods receipts, vendor records in one place.', ent: '+ RFQs · Auto-PO' },
  { title: 'Inventory', text: 'Lot/serial traceability, append-only stock ledger, live balances.' },
  { title: 'Production Execution', text: 'MOs snapshot the BOM at release; job cards log labor, machine time, consumption.' },
  { title: 'Quality & Costing', text: 'Incoming inspection, planned cost rollup per unit.', ent: '+ Variance analysis' },
  { title: 'Planning & Governance', text: 'Full audit trail on every change.', ent: '+ MRP · RBAC' },
]

export const routingSteps = ['Cutting', 'Machining', 'Assembly', 'Testing', 'Painting']

export const plans = [
  {
    name: 'Forever Free',
    price: '₹0',
    items: ['Product & BOM versioning', 'Manufacturing orders & job cards', 'Inventory & stock ledger', 'Purchase orders', 'Incoming inspection'],
    cta: 'Try Today',
  },
  {
    name: 'Enterprise',
    price: 'Talk to Sales',
    highlight: true,
    items: ['Everything in Free', 'RFQs & auto-PO', 'Full inspection & variance', 'Demand-driven MRP', 'Approval workflows & RBAC'],
    cta: 'Talk to Sales',
  },
]

export const footerLinks = ['Terms', 'Privacy', 'MSA', 'Refunds']
