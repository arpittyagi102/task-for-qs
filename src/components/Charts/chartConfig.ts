import { ChartOptions } from 'chart.js';

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: import('chart.js').TooltipItem<'line'>) => {
          const current = ctx.parsed.y;
          const index = ctx.dataIndex;
          const dataset = ctx.dataset.data as number[];
          const previous = index > 0 ? dataset[index - 1] : null;

          let trend = '';
          if (previous !== null) {
            if (current < previous) trend = ' ⬆️';
            else if (current > previous) trend = ' ⬇️';
            else trend = ' ➡️';
          }

          return `Rank: ${current} ${trend}`;
        }
      },
      backgroundColor: '#1e293b',
      titleColor: '#fff',
      bodyColor: '#facc15',
      borderColor: '#facc15',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 8
    }
  },
  scales: {
    y: {
      reverse: true,
      title: {
        display: true,
        text: 'Rank',
        color: '#c0c0c0'
      },
      ticks: {
        stepSize: 10,
        color: '#c0c0c0'
      },
      grid: {
        color: 'rgba(255,255,255,0.1)'
      }
    },
    x: {
      title: {
        display: true,
        text: 'Year',
        color: '#c0c0c0'
      },
      ticks: {
        color: '#c0c0c0'
      },
      grid: {
        color: 'rgba(255,255,255,0.1)',
        display: false
      }
    }
  },
  animation: {
    duration: 1500,
    easing: 'easeInOutCubic' // This will now be valid
  }
};

export { chartOptions };
