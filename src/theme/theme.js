import { Inter } from 'next/font/google'
import { createTheme } from '@mantine/core'

const inter = Inter({
weight: ['300', '400', '500', '600', '700'],
style: ['normal'],
subsets: ['latin']
})

export const theme = createTheme({
fontFamily: inter.style.fontFamily
})