"use client" // Its a client component because it uses Chart.js which requires client-side rendering

import { Line } from 'react-chartjs-2'
import type { Ranking } from '@/lib/types'
import { chartOptions } from './chartConfig'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Alert } from 'flowbite-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Chart({ uniRankingData }: ChartProps) {
    const last5YearsData = uniRankingData.slice(-5);

    const chartData = {
        labels: last5YearsData.map((r) => r.year),
        datasets: [
            {
                label: 'QS World University Ranking',
                data: last5YearsData.map((r) => r.rank),
                fill: false,
                borderColor: '#a0a0a0',
                backgroundColor: '#f600ff',
                tension: 0.3,
                pointStyle: 'rect',
                pointRadius: 6,
                pointHoverRadius: 8,
            },
        ],
    };

    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-xl py-10 px-6 mb-8 border border-white/20">
            <h3 className="text-xl font-semibold text-blue-200 mb-4 text-center">
                QS World University Rankings
            </h3>
            {uniRankingData.length > 0 ? (
                <Line data={chartData} options={chartOptions} height={320} />
            ) : (
                <Alert color="warning" className="text-center">No ranking data available.</Alert>
            )}
        </div>
    );
}

interface ChartProps {
    uniRankingData: Ranking[];
}
