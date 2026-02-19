type Item = {
  title: string;
  institution: string;
  period: string;
  description: string;
};

export default function Timeline({
  left,
  right,
}: {
  left: Item[];
  right: Item[];
}) {
  return (
    <section className="relative py-24">

      {/* Center line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-gray-200" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left side — Education */}
        <div className="space-y-12 pr-8">
          <h2 className="text-3xl font-bold mb-8">Education</h2>

          {left.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -right-11 top-2 w-4 h-4 rounded-full bg-blue-500" />

              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.institution} • {item.period}
              </p>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right side — Experience */}
        <div className="space-y-12 pl-8">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>

          {right.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-11 top-2 w-4 h-4 rounded-full bg-green-500" />

              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.institution} • {item.period}
              </p>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
