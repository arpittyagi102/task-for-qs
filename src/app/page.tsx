'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import {
    Card,
    Button,
    Spinner,
} from 'flowbite-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function AdminDashboard() {
    const [profile, setProfile] = useState<any>(null);
    const [rankings, setRankings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            // Fetch university profile
            const profileRes = await fetch('/api/trpc/getUniversityProfile');
            const profileData = await profileRes.json();
            setProfile(profileData.result?.data);
            // Fetch rankings
            const rankingRes = await fetch('/api/trpc/getUniversityRankings');
            const rankingData = await rankingRes.json();
            setRankings(rankingData.result?.data || []);
            setLoading(false);
        }
        fetchData();
    }, []);

    // Chart data setup
    const chartData = {
        labels: rankings.map((r) => r.year),
        datasets: [
            {
                label: 'QS World University Ranking',
                data: rankings.map((r) => r.rank),
                fill: false,
                borderColor: '#2563eb',
                backgroundColor: '#2563eb',
                tension: 0.3,
                pointRadius: 6,
                pointHoverRadius: 8,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Ranking Performance (Last 5 Years)',
                font: { size: 20 },
                color: '#2563eb',
            },
            tooltip: {
                callbacks: {
                    label: (ctx: any) => `Rank: ${ctx.parsed.y}`,
                },
            },
        },
        scales: {
            y: {
                reverse: true, // Lower rank is better
                title: { display: true, text: 'Rank' },
                ticks: { stepSize: 10 },
            },
            x: {
                title: { display: true, text: 'Year' },
            },
        },
    };

    return (
        <section className="border-grid h-screen flex items-center justify-center">
            <div className="container flex flex-col items-center gap-5 text-center">
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl p-6">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-4 text-center">
                        QS World University Rankings (Last 5 Years)
                    </h3>
                    {loading ? (
                        <div className="flex justify-center py-8">
                            <Spinner color="info" />
                        </div>
                    ) : rankings.length > 0 ? (
                        <Line data={chartData} options={chartOptions} height={320} />
                    ) : (
                        <div className="text-gray-500 text-center">No ranking data available.</div>
                    )}
                </div>
            </div>
        </section>
    );
}
