import { FadeText } from "@/components/ui/fade-text";

export async function FadeTextDemo() {
  return (
    <div className="flex flex-col space-y-8 text-center">
      <FadeText
        className="text-4xl font-bold text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text="Hero Page"
      />
      <FadeText
        className="text-4xl font-bold text-white"
        direction="right"
        framerProps={{
          show: { transition: { delay: 0.4 } },
        }}
        text="We are just"
      />
      <FadeText
        className="text-4xl font-bold text-white"
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.6 } },
        }}
        text="Creating Example"
      />
      <FadeText
        className="text-4xl font-bold text-white"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="getting started!"
      />
    </div>
  );
}
