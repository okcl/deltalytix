import { Suspense } from 'react'
import { UserEquityDashboard } from '@/app/[locale]/admin/components/user-equity/user-equity-dashboard'

export const dynamic = 'force-dynamic';
export default function UserEquityPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserEquityDashboard />
    </Suspense>
  )
} 
