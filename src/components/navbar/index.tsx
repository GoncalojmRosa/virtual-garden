import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default async function Navbar() {
  return (
    <nav className="p-4">
      <div className="flex items-center justify-between">
        <span className=" text-2xl">🌱 Virtual Garden</span>
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
