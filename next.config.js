/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build', // Custom build directory name

    headers: async () => {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY', // Prevent content from being displayed in a frame
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
