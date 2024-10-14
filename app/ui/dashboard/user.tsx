import { auth } from '@/auth';

export default async function UserProfile() {
  const user = await auth();
  return (
    <div className="p-4 rounded-sm w-12">
      {user && <p>{user.user?.name}</p>}
      <pre>
        {
          JSON.stringify(user)
        }
      </pre>
    </div>
  );
}
