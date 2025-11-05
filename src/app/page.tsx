import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            Israel Med Companion
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Your trusted partner in navigating Israel&apos;s world-class healthcare system
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive medical tourism services with transparency, compassion, and support every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Read Our Blog
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Our Services
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">World-Class Care</h3>
              <p className="text-gray-600">
                Access to Israel&apos;s top medical facilities and specialists
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                Clear cost breakdowns and financing options available
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Full Support</h3>
              <p className="text-gray-600">
                Comprehensive concierge services from consultation to recovery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
