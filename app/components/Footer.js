// export default function Footer() {
//     return (
//         <footer className="w-full bg-gray-100 text-center text-gray-600 py-4 mt-12 border-t border-gray-200">
//             &copy; {new Date().getFullYear()} Zen Home Spa. All rights reserved.
//         </footer>
//     );
// }
// 'use client';

// import { useEffect, useState } from 'react';

export default function Footer({ info }) {
    return (
        <footer className="w-full bg-gray-100 border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid gap-6 md:grid-cols-2">
            <div>
                <h3 className="text-lg font-semibold text-gray-900">
                {info?.name || 'Zen Home Spa'}
                </h3>

                {info?.otherName && (
                <p className="text-sm text-gray-500 mt-1">
                    {info.otherName}
                </p>
                )}

                {info?.slogan && (
                <p className="text-sm text-gray-600 mt-3 italic">
                    "{info.slogan}"
                </p>
                )}
            </div>

            <div className="space-y-2 text-sm text-gray-600">
                {info?.address && (
                <p>
                    <span className="font-medium">Địa chỉ:</span> {info.address}
                </p>
                )}

                {info?.phone && (
                <p>
                    <span className="font-medium">Hotline:</span> {info.phone}
                </p>
                )}

                {info?.email && (
                <p>
                    <span className="font-medium">Email:</span>{' '}
                    <a
                    href={`mailto:${info.email}`}
                    className="text-primary hover:underline"
                    >
                    {info.email}
                    </a>
                </p>
                )}
            </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} {info?.name || 'Zen Home Spa'}. All rights reserved.
            </div>
        </div>
        </footer>
    );
}