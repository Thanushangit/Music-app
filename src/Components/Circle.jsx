import { CircularVisualizer, WaveformVisualizer, FrequencyVisualizer } from 'react-audio-visualizer-pro';

const Circle = () => {
    return (
        // <CircularVisualizer
        //     audioUrl=""
        //     width={300}
        //     height={300}
        //     backgroundColor="#000"
        //     animationSpeed={1}
        //     barWidth={2}
        // />

        // <WaveformVisualizer
        //     audioUrl="./Aaruyire.mp3"
        //     width={800}
        //     height={200}
        //     backgroundColor="#000000"
        // />

        <FrequencyVisualizer
           
            width={800}
            height={200}
            backgroundColor="#000"
            gradientColors={['#ff0000', '#00ff00', '#0000ff']}
            barWidth={4}
            barSpacing={1}
            barRadius={2}
        />
    )
}

export default Circle