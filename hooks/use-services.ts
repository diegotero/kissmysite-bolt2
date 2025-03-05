'use client'

import { useEffect, useState } from 'react'
import { getServices } from '@/lib/services'
import type { Service } from '@/types/service'

export function useServices() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    async function fetchServices() {
      const servicesData = await getServices()
      setServices(servicesData)
    }

    fetchServices()
  }, [])

  return { services }
} 