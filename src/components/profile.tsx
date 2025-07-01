import type { University } from '@/lib/types';

export default function Profile({ uniName, uniDetails }: ProfileProps) {
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-xl py-5 lg:py-10 px-6 border border-white/20">
            <h3 className="text-xl font-semibold text-blue-200 mb-4 text-center">
                {uniName}
            </h3>

            {uniDetails && (
                <div className="text-blue-100 text-justify text-sm lg:text-md lg:px-5">
                    {/* University description is set as inner HTML to allow showing links and other formatting */}
                    <div
                        className='uniDescription'
                        dangerouslySetInnerHTML={{ __html: uniDetails.description }}
                        />
                    <p className="mt-2 text-blue-300">{uniDetails.country}</p>
                </div>
            )}
        </div>
    );
}

interface ProfileProps {
    uniName: string;
    uniDetails: University | null;
}