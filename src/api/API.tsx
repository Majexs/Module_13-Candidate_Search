const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
      console.log(import.meta.env.VITE_GITHUB_TOKEN);
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
      console.log('Data:', data);
    return data;
  } catch (err) {
      console.log('an error occurred', err);
    return [];
  }
};

const searchGithubUser = async (login: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${login}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
      console.log('an error occurred', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };