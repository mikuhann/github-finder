import RepoItem from './RepoItem';

function ReposList({ repos }) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <card className="body">
        <h2 className="text-3xl my-4 font-bold card-title">
         10 latest repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </card>
    </div>
  );
}

export default ReposList;
