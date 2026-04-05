import { readImageConfig } from "@/lib/imageConfig";
import { ImageUploader } from "./ImageUploader";
import { AdminNav } from "./AdminNav";

export const dynamic = "force-dynamic";

const IMAGE_SLOTS = [
  {
    category: "Inicio",
    slots: [
      {
        key: "hero-home",
        label: "Hero Principal",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDrxzorrMmrPnZemIBB63uT5Af2dP8cIqzwra5swuTAMaxJ-FvRrMRfR6EE6y91IWbsg99-Tf1UEqAU152DZ-e152nfzQ7xi7XelpBKQsCEKRTd3kEBhar5Unbri-UK5JqP2Rs-fnr0DX2PUcV9UfdxncBsUFmRMhgQkpJklk_NPOZfxANwF0xK49maqDom8YsxcOoAKmyArShtq2UpifLVomHmC0UNJTC1J5BdYtaWlJxC_PRMEu6Qg1jzjsR8r8tA3EbiB3-i",
      },
      {
        key: "claim-home",
        label: "Sección Institucional",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBoIKdf9RxQJz8XwwhPiaSqY12GYqvKR1x4J2ERLX6Nidi4brk13nZYVHf4eYFQuQ6IxyegNYUahZynh1U1YMZid8LrgisFCgatrSqDXBOfa5xz1qwFCIEIByLvIPdpUq6w6PiQsaLG6N46Y77cgHBxvZfWQkTNPZ5kJ-3o6fS_QWVw5oQ67H0i0dBK-kT_RuUx4DlfPu9FHFgGcsPJD3rMflHoPIqu-uDH_dIi4m940UYo2OFPPTErO0dy2xq-xekJTGbAfeKF",
      },
      {
        key: "col-carreras",
        label: "Columna Carreras",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCSt2zzwYrLmBayq_aTjFT8_oUUUHacJvZ84j8LoMvCweF0p30bQzO26i1F4H4YaXxsyhOVnXcn4jlgdUE33DWW27rs6qvHz9XEfOeSJmMgr2kxzy52ocQhfgyhv_t4zEoyMbZD77CawYNgxozKC1SgLwiMGRZh8bDr0KC6gV9oIA2oX54YVr2XagNYWZLQw8vBwSqNIXetK4em_HlUKbVPDkmSRhKzZBVeDEPpeMbKroJbhLWaX1EEMazeIO8eqvu8kWOculHH",
      },
      {
        key: "col-postitulos",
        label: "Columna Postítulos",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBtQAEAeKwSfIZjA8ukYft5HsqD9Rrd2h0vowjvst8Okkb3ZzX6icB6eL_FZj7VGDHPvuH3naqRr4Zd_ba_FCwNkla0PdkyG1JZmu0PcDZRvTzsQQANtqDCxzytuWF9UD4g1uKuXFcwtTqvlr-BY3B8Q4s1PkunkKrbLuekx_LmLWGYMROQOA3HA6zEeKwzbIw1DVxrBgMTgwVoGf6qr5-csNJLGX_hKCC8wtl_q1IwLIazApUP9a_sfhDoXPq1IKtLZFLYpDFS",
      },
      {
        key: "col-cursos",
        label: "Columna Cursos",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAjGCPV3OcuG633-8G9XHeXtlM8UIHwO7unbmflUh-ySLJxIN1QeJ6XbKv3mgCnaKpNlzlqMIFHseBKVJ2HPwzExs_UiwSqNC3FSivbDiteXH1ooTEF0Yk9DSk8HHRLO4lXbUSwj-U7yLhZilMn1867XN5BnphC6VjIx7IaM27EZ9xF5h3TllD81149Hd6nC5c_Mv3ZFBN15w-OXL4gbtyL5c0siStQSvBI2nNxdcp6YYyyMDx9j3GLTy_-w4N7LfbCFIxOOQXQ",
      },
    ],
  },
  {
    category: "Heroes (páginas internas)",
    slots: [
      {
        key: "hero-carreras",
        label: "Hero Carreras",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCSt2zzwYrLmBayq_aTjFT8_oUUUHacJvZ84j8LoMvCweF0p30bQzO26i1F4H4YaXxsyhOVnXcn4jlgdUE33DWW27rs6qvHz9XEfOeSJmMgr2kxzy52ocQhfgyhv_t4zEoyMbZD77CawYNgxozKC1SgLwiMGRZh8bDr0KC6gV9oIA2oX54YVr2XagNYWZLQw8vBwSqNIXetK4em_HlUKbVPDkmSRhKzZBVeDEPpeMbKroJbhLWaX1EEMazeIO8eqvu8kWOculHH",
      },
      {
        key: "hero-cursos",
        label: "Hero Cursos",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAjGCPV3OcuG633-8G9XHeXtlM8UIHwO7unbmflUh-ySLJxIN1QeJ6XbKv3mgCnaKpNlzlqMIFHseBKVJ2HPwzExs_UiwSqNC3FSivbDiteXH1ooTEF0Yk9DSk8HHRLO4lXbUSwj-U7yLhZilMn1867XN5BnphC6VjIx7IaM27EZ9xF5h3TllD81149Hd6nC5c_Mv3ZFBN15w-OXL4gbtyL5c0siStQSvBI2nNxdcp6YYyyMDx9j3GLTy_-w4N7LfbCFIxOOQXQ",
      },
      {
        key: "hero-nosotros",
        label: "Hero Nosotros",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBoIKdf9RxQJz8XwwhPiaSqY12GYqvKR1x4J2ERLX6Nidi4brk13nZYVHf4eYFQuQ6IxyegNYUahZynh1U1YMZid8LrgisFCgatrSqDXBOfa5xz1qwFCIEIByLvIPdpUq6w6PiQsaLG6N46Y77cgHBxvZfWQkTNPZ5kJ-3o6fS_QWVw5oQ67H0i0dBK-kT_RuUx4DlfPu9FHFgGcsPJD3rMflHoPIqu-uDH_dIi4m940UYo2OFPPTErO0dy2xq-xekJTGbAfeKF",
      },
      {
        key: "hero-beneficios",
        label: "Hero Beneficios",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCVdJX_aUVxonzEmGlU9j1Vur7v2YIRZbz-pJE5cIofzorvFdo_hQahgBeSi645vf831SgAMBPp4bfLySSsmqkTtslIgmraxKuz5wqJiWZ4rQ4fz1hM14QBORyoVhjxEcsy6ToANn4qfXp0VhSGJaR-AHLGTcETnzWKaFq7q5wg2YwcPT3ohW5GlhwZYrQkLNqy67dwtE_GLAAF2cZSY949gLS4j9qh0p-F4-Qnd53Drs1Yki7LX3ZoFmaQiqXrJPUkXX0TM9L_",
      },
      {
        key: "hero-postitulos",
        label: "Hero Postítulos",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBtQAEAeKwSfIZjA8ukYft5HsqD9Rrd2h0vowjvst8Okkb3ZzX6icB6eL_FZj7VGDHPvuH3naqRr4Zd_ba_FCwNkla0PdkyG1JZmu0PcDZRvTzsQQANtqDCxzytuWF9UD4g1uKuXFcwtTqvlr-BY3B8Q4s1PkunkKrbLuekx_LmLWGYMROQOA3HA6zEeKwzbIw1DVxrBgMTgwVoGf6qr5-csNJLGX_hKCC8wtl_q1IwLIazApUP9a_sfhDoXPq1IKtLZFLYpDFS",
      },
    ],
  },
  {
    category: "Carreras",
    slots: [
      {
        key: "carrera-guia-de-montana",
        label: "Guía de Montaña",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCSt2zzwYrLmBayq_aTjFT8_oUUUHacJvZ84j8LoMvCweF0p30bQzO26i1F4H4YaXxsyhOVnXcn4jlgdUE33DWW27rs6qvHz9XEfOeSJmMgr2kxzy52ocQhfgyhv_t4zEoyMbZD77CawYNgxozKC1SgLwiMGRZh8bDr0KC6gV9oIA2oX54YVr2XagNYWZLQw8vBwSqNIXetK4em_HlUKbVPDkmSRhKzZBVeDEPpeMbKroJbhLWaX1EEMazeIO8eqvu8kWOculHH",
      },
      {
        key: "carrera-guia-de-trekking",
        label: "Guía de Trekking",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBtQAEAeKwSfIZjA8ukYft5HsqD9Rrd2h0vowjvst8Okkb3ZzX6icB6eL_FZj7VGDHPvuH3naqRr4Zd_ba_FCwNkla0PdkyG1JZmu0PcDZRvTzsQQANtqDCxzytuWF9UD4g1uKuXFcwtTqvlr-BY3B8Q4s1PkunkKrbLuekx_LmLWGYMROQOA3HA6zEeKwzbIw1DVxrBgMTgwVoGf6qr5-csNJLGX_hKCC8wtl_q1IwLIazApUP9a_sfhDoXPq1IKtLZFLYpDFS",
      },
    ],
  },
  {
    category: "Profesores",
    slots: [
      {
        key: "prof-pablo-gonzalez",
        label: "Pablo González",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDhhWEVSgqqajymG73-7cJarTmA1jlAureYX1doCltXLQubxP0XGix-bfEW0do1kOieYa-xRtH3RJ_A0ZpcGMSU7WyIGQPOieYqD62JjhDkTmQkuIwO69jgA7-KT0-WiUg5tHTivRB0dxVtMUrw9WZtJCsuSy0ySRfcvqxm6F8x3YPDOYHmRPLILGCNWjyl5xlIgFCMtI8ZPSoxWVC_xuKqHoXAhr8yRgZo2HZnvkvoFDz2b8ZLOw2piW8V2zT8170bkB8-Tzrm",
      },
      {
        key: "prof-lucia-martinez",
        label: "Lucía Martínez",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC77W3u6fJgGU_9l29x4Rv22HCDIwh00_5lCEoOCUTVGrYorDhnbuUY81YMGGIE-b6lY8KZfIO7nAfzzySfqRbQHYMinnYwarYDyIHpKtX5-CA0kwyrUefQOmvhMlgaPqWFE8xm_FT-93WkfXrtbzGGSZ6lz2n07eBl-G5FDbScC6zi1swAYTwdznfzd_vWkIqBZ_ti_ZdDp1eoI5EVusyoYfIAsWjfn9sbzzoTGgwsu1yleBswYK-b4Xc2Sk8KA2QP3LFEh0qt",
      },
      {
        key: "prof-andres-riva",
        label: "Andrés Riva",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAJw7eqAf3cPF7k7YyB5qoQFQf4s79SaWtRSeY29SPvlBI8c0FKxMr5zSjEXbVjEVw84-GAlIf2NN3Jyh8IlZFSRJrYOFmHhVzi11G1HD_AnCyVi5b3d7caSyU--hP3tXggOPVsWuUgYCGhLLF6m-OpnPR3xO-tDrsLBiQ7Abm2TXm7KInI8FojXB9ohcEc0FKsqQQAv2fO-BZdrc-TzM5tXMlt_-HQA2sx4DCUHRCjxDzqSbRoFHaQEOlMdX_nfwbp",
      },
      {
        key: "prof-martin-castro",
        label: "Martín Castro",
        fallback:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCjb6SFR8yw9rZiaFKB1H58CwUMes-zeJ3SU_biLxnfblLcG5tUZF2G50JQCYqDGvNvrJLT3o5buEyuhrJq_VYUP-1gz7WZwlPbpSQ25VXzQ7MHLUZpR7Zod4H3g4q1mB3NepawNG5RRwx1XvjLWFbPoK3wkFkhF_pxXAzAc_tCTGqXSMwWJ1VWuCzbacyLuGbhXJxWJbxLHRbXxkdVcRPOKvWxV58NSS8Puxo_-3WGL22JWbEjawuO_8taisGaWQDAoyO773SXK",
      },
    ],
  },
];

export default async function AdminPage() {
  const config = readImageConfig();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[#E87C3E] text-xl">▲</span>
              <h1 className="text-2xl font-black">EAAM — Gestión de Imágenes</h1>
            </div>
            <p className="text-slate-500 text-sm">
              Subí una imagen y hacé clic en &quot;Guardar&quot;. El sitio se actualiza
              automáticamente.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              className="text-sm text-slate-400 hover:text-white border border-white/10 rounded-lg px-4 py-2 transition-colors"
            >
              Ver sitio →
            </a>
          </div>
        </div>

        <AdminNav />

        {IMAGE_SLOTS.map((group) => (
          <div key={group.category} className="mb-12">
            <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-5 flex items-center gap-3">
              <span>{group.category}</span>
              <span className="flex-1 h-px bg-white/10" />
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {group.slots.map((slot) => (
                <ImageUploader
                  key={slot.key}
                  imageKey={slot.key}
                  label={slot.label}
                  currentSrc={config[slot.key] ?? null}
                  fallbackSrc={slot.fallback}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
