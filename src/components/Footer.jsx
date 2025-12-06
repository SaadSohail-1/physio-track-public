export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Physio30. All rights reserved.
        </p>
        <span className="text-xs">Not an alternative for medical diagonosis.</span>
      </div>
    </footer>
  );
}
