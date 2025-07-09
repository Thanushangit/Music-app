import { useRef, useEffect } from "react";


function animateBars(analyser, canvas, canvasCtx, dataArray, bufferLength) {
    analyser.getByteFrequencyData(dataArray);

    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    const HEIGHT = canvas.height;
    const barWidth = Math.ceil(canvas.width / bufferLength) * 1.2;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i] / 255) * HEIGHT;
        const blueShade = Math.floor((dataArray[i] / 255) * 5);
        const blueHex = ["#fff59d", "#ffca28", "#ffb300", "#f57c00", "#e65100"][
            blueShade
        ];
        canvasCtx.fillStyle = blueHex;
        canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
        x += barWidth + 1;
    }
}

const WaveForm = ({ analyzerData }) => {
    const canvasRef = useRef(null);
    const { dataArray, analyzer, bufferLength } = analyzerData || {};

    useEffect(() => {
        if (!analyzer || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const canvasCtx = canvas.getContext("2d");

        const draw = () => {
            requestAnimationFrame(draw);
            animateBars(analyzer, canvas, canvasCtx, dataArray, bufferLength);
        };
        draw();
     
    }, [analyzer, dataArray, bufferLength]);

    return (
        <div className="w-full h-full pt-4">
            <canvas
                ref={canvasRef}
                className="w-full h-full bg-transparent rounded "

            />
        </div>
    );
};

export default WaveForm;