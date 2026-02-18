import { Head } from '@inertiajs/react'
import { Navbar } from '~/pages/home/components/navbar'
import { Hero } from '~/pages/home/components/hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pruftnet - Visual Network Analyser | Open Source Packet Capture Tool</title>
        <meta
          name="description"
          content="Pruftnet is a free, open-source visual network analyser. Capture packets, visualize network topology, and build custom analysis workflows with drag-and-drop simplicity."
        />
        <meta
          name="keywords"
          content="network analyzer, packet capture, network visualization, wireshark alternative, network topology, open source network tool, packet sniffer, network monitoring"
        />
        <meta property="og:title" content="Pruftnet - Visual Network Analyser" />
        <meta
          property="og:description"
          content="Free, open-source network analysis with visual workflows"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prueftnet.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pruftnet - Visual Network Analyser" />
        <meta
          name="twitter:description"
          content="Free, open-source network analysis with visual workflows"
        />
      </Head>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
        </main>
      </div>
    </>
  )
}
