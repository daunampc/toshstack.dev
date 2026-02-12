export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold">User does not exist</h1>
      <p className="text-gray-500 mt-2">
        The user you are looking for either does not exist or has been deleted.
      </p>
    </div>
  );
}
