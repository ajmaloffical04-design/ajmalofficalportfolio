import { CheckCircle2, MapPin, Settings } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Achievements</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Launched Uventer – Event Booking App</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Launch of Uventer – event booking app designed for local business and corporate events! We are honored that P. A. Mohammed Riyas, Minister for Public Works Department (PWD) and Tourism, and Ashique sir (Ashique Associates) officially launched the app.
            </p>
          </div>
        </div>
        
        <div className="border border-border rounded-2xl overflow-hidden bg-card flex flex-col md:flex-row items-center shadow-sm">
          {/* Left: Image */}
          <div className="w-full md:w-[55%] shrink-0">
            <img 
              src="/achieve.png" 
              alt="Uventer App Launch" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Right: Content */}
          <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-14 rounded-xl bg-purple-100 flex items-center justify-center shrink-0 p-2">
                <img src="/uventerlogo.png" alt="Uventer Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <time className="text-sm text-muted-foreground font-medium">April 29th, 2026</time>
                <h3 className="text-xl font-bold">Uventer App Launch</h3>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              This project was brought to life with the vision and ideas of Rafeeq KMC sir and Unais Hg sir, whose guidance played a key role in shaping Uventer.
            </p>
            
            <div className="mb-4">
              <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                <Settings className="size-4" /> What is Uventer?
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Uventer is a smart event booking platform focused on local regions, making it easy to:
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 text-purple-600 mt-0.5 shrink-0" />
                  <span>Discover events</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 text-purple-600 mt-0.5 shrink-0" />
                  <span>Book tickets</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 text-purple-600 mt-0.5 shrink-0" />
                  <span>Manage business & corporate events seamlessly</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-auto pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <MapPin className="size-4 shrink-0" />
                Officially launched at Head X Future 2.0
              </div>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium underline underline-offset-4">
                Read Blog Article
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
