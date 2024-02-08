'use client'

import React from 'react';
import { ReactNode } from 'react'
import { MantineProvider as MantineUIProvider } from '@mantine/core'
import { theme } from '../theme/theme'

export default function MantineProvider({ children }: { children: ReactNode }) {
return <MantineUIProvider theme={theme}>{children}</MantineUIProvider>
}