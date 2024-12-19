import React from "react";

const teamsData = [
  {
    division: "Engineering",
    members: [
      {
        name: "Alice Johnson",
        role: "Software Engineer",
        image:
          "https://imechewebresources.blob.core.windows.net/imeche-web-content/images/default-source/default-album/women-in-engineering-2.png?sfvrsn=77b36811_0",
      },
      {
        name: "Bob Smith",
        role: "DevOps Engineer",
        image:
          "https://images.ctfassets.net/gogvzi849aaj/6E1LznxWtjZG7IfhHx3aU4/32fe9f15ea2c7ebb42ca54ed9dd8dd5c/Engineering_Hero.jpg?fm=webp&q=90",
      },
    ],
  },
  {
    division: "Marketing",
    members: [
      {
        name: "Charlie Brown",
        role: "Marketing Manager",
        image:
          "https://www.code-brew.com/wp-content/uploads/2021/08/vector-smart.png",
      },
      {
        name: "Dana White",
        role: "Content Strategist",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Dana_White_-_London_2015_%28cropped%29.jpg/800px-Dana_White_-_London_2015_%28cropped%29.jpg",
      },
    ],
  },
  {
    division: "Sales",
    members: [
      {
        name: "Eve Adams",
        role: "Sales Manager",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/eve_photo_by_michael_loccisano_film_magic_getty_76089113.jpg?resize=1200:*",
      },
      {
        name: "Frank Lee",
        role: "Account Executive",
        image:
          "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/esensi/2023/12/sinatra_wide-e82beae0454312f8aa480f138232ea2be372ba8b-s1400-c100.jpg",
      },
    ],
  },
  {
    division: "Customer Support",
    members: [
      {
        name: "Grace Green",
        role: "Support Lead",
        image:
          "https://img.freepik.com/free-photo/beautiful-ancient-greece-woman-portrait_23-2151026685.jpg?t=st=1734622621~exp=1734626221~hmac=f8685caa37a38b23061d5289efe4a76769c5d0e9700c5c8fbd312cd051144e43&w=360",
      },
      {
        name: "Henry Black",
        role: "Customer Support",
        image:
          "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/vmzpmpwymbcmaaa5zfe9",
      },
    ],
  },
];

const TeamsPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Meet Our Teams
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Our teams are dedicated to delivering the best results for your needs.
          Learn more about the divisions at Tracos and the talented individuals
          driving our success.
        </p>
      </header>

      {/* Teams List */}
      <div className="space-y-12">
        {teamsData.map((team) => (
          <section key={team.division}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {team.division}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.members.map((member) => (
                <div
                  key={member.name}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
