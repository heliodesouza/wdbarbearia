export default function ProgressBar({ step }) {
  return (
    <div className="w-full max-w-md mb-8">
      <div className="flex justify-between text-sm mb-2">
        <span className={step >= 1 ? "text-yellow-400" : ""}>
          Profissional
        </span>
        <span className={step >= 2 ? "text-yellow-400" : ""}>
          Serviço
        </span>
        <span className={step >= 3 ? "text-yellow-400" : ""}>
          Data
        </span>
        <span className={step >= 4 ? "text-yellow-400" : ""}>
          Horário
        </span>
      </div>

      <div className="h-2 bg-gray-800 rounded">
        <div
          className="h-2 bg-yellow-400 rounded transition-all"
          style={{ width: `${step * 25}%` }}
        />
      </div>
    </div>
  );
}