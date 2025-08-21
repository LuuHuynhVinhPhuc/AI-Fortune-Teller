import React, {useState} from 'react';

export default function AIFortuneTeller() {
    const [yearInput, setYearInput] = useState(2025);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState('');
    const [loadingStep, setLoadingStep] = useState(0);

    const steps = [
        "🔍 Đang phân tích dữ liệu vũ trụ...",
        "🌟 Kết nối với nguồn năng lượng thần bí...",
        "🎯 Đang tính toán định mệnh...",
        "✨ Hoàn tất tiên tri..."
    ];

    const handlePredict = async () => {
        const numYear = Number(yearInput);
        const currentYear = new Date().getFullYear();

        if (isNaN(numYear)) {
            setResult("❌ Vui lòng nhập một năm hợp lệ!");
            return;
        }

        if (numYear < currentYear) {
            setResult("⏳ Bạn muốn tiên tri quá khứ à? Thử nhập một năm trong tương lai nhé!");
            return;
        }

        setIsLoading(true);
        setResult('');
        setLoadingStep(0);

        for (let i = 0; i < steps.length; i++) {
            setLoadingStep(i);
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        const trollResult = `${numYear + 1}`;


        setResult(trollResult);
        setIsLoading(false);
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden p-6">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div
                    className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
                <div
                    className="absolute top-32 right-16 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>
                <div
                    className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300 rounded-full opacity-25 animate-pulse"></div>
                <div
                    className="absolute bottom-40 right-10 w-12 h-12 bg-green-300 rounded-full opacity-20 animate-bounce"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <div
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4 shadow-2xl animate-spin-slow">
                        <span className="text-3xl">🔮</span>
                    </div>
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 mb-2">
                        AI Tiên Tri
                    </h1>
                    <p className="text-xl text-purple-200 font-medium">Khám phá vận mệnh năm sau của bạn</p>
                </div>

                {/* Main card */}
                <div
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 w-full max-w-lg shadow-2xl">
                    {/* Glass effect inner container */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl">
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Nhập năm bạn muốn tiên tri:
                            </label>
                            <input
                                type="number"
                                value={yearInput}
                                onChange={(e) => {
                                    setYearInput(e.target.value);
                                    if (result) {
                                        setResult('');
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        setResult('');
                                        handlePredict();
                                    }
                                }}
                                className="w-full border-2 border-purple-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 rounded-xl p-4 text-center text-lg font-semibold text-gray-700 transition-all duration-300 outline-none"
                                placeholder="2024, 2025, 2026..."
                                min="1000"
                                max="9999"
                            />
                        </div>

                        <button
                            onClick={handlePredict}
                            disabled={!yearInput || isLoading}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none"
                                         viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Đang tiên tri...
                                </span>
                            ) : (
                                <>Bắt đầu tiên tri ✨</>
                            )}
                        </button>

                        {/* Result area */}
                        <div className="mt-6 min-h-[100px] flex items-center justify-center">
                            {isLoading && (
                                <div className="text-center">
                                    <div
                                        className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3 animate-pulse">
                                        <span className="text-2xl">🌟</span>
                                    </div>
                                    <p className="text-purple-700 font-semibold text-lg animate-pulse">
                                        {steps[loadingStep]}
                                    </p>
                                </div>
                            )}

                            {!isLoading && result && (
                                <div className="text-center animate-fadeIn">
                                    <div
                                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4 shadow-lg">
                                        <span className="text-3xl">✨</span>
                                    </div>
                                    <div
                                        className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 border-2 border-purple-200">
                                        <p>
                                            Năm sau của bạn sẽ là:
                                            <span className="ml-2 text-3xl font-extrabold text-pink-500 animate-bounce">
                                            {result}
                                          </span> ✨
                                        </p>

                                    </div>
                                </div>
                            )}

                            {!isLoading && !result && (
                                <div className="text-center text-gray-400">
                                    <div
                                        className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                                        <span className="text-3xl">🔮</span>
                                    </div>
                                    <p className="font-medium">Nhập năm và bắt đầu khám phá!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-purple-200 text-sm mt-6 opacity-75">
                    🌟 Được tạo bởi AI với tình yêu và magic ✨
                </p>
            </div>
        </div>
    );
}