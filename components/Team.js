import Image from "next/image";

const teamMembers = [
  { id: 1, name: "Ujjwal kr. sittu", responsibility: "Lead Organiser" },
  { id: 2, name: "Krishna Nayak", responsibility: "Lead Organiser" },
  { id: 3, name: "Ujjwal kr. sittu", responsibility: "Lead Organiser" },
  { id: 4, name: "Ujjwal kr. sittu", responsibility: "Lead Organiser" },
  { id: 5, name: "Ujjwal kr. sittu", responsibility: "Lead Organiser" },
  { id: 6, name: "Ujjwal kr. sittu", responsibility: "Lead Organiser" },
  { id: 7, name: "Ujjwal kr. sittu", responsibility: "Lead Organiser" },
  { id: 8, name: "Ujjwal kr. sittu", responsibility: "Lead Organiser" },
  { id: 9, name: "Ujjwal kr. sittu", responsibility: "Lead Organiser" },
];
const team = () => {
  const listMembers = teamMembers.map((teamMember) => <ListMembers key={teamMember.id} data={teamMember} />);
  return (
    <section id="team" className="text-center bg-gradient-to-br from-[#12141D] to-slate-800 text-white py-24 p-8">
      <h2>Team</h2>
      <p className="max-w-prose mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure sequi autem excepturi reprehenderit nostrum, soluta culpa consequatur maiores ipsa at, porro sapiente
        voluptas aperiam ullam quasi facilis minus non, obcaecati ad!
      </p>
      {/* Team grid display */}
      <div className="py-40 grid sm:grid-cols-[repeat(3,minmax(150px,_250px))] grid-flow-row justify-evenly gap-20 md:px-28">{listMembers}</div>
    </section>
  );
};

const ListMembers = (props) => {
  const { id, name, responsibility } = props.data;
  // TODO: grid pyramid shape kind a tough to solve
  /**************************/
  let gridNumber = 2 * id - 1;
  if (id > 5) gridNumber = id % 2 == 0 ? id / 2 - 1 : parseInt(id / 2 + 1);
  console.log(gridNumber);
  /**************************/
  const str = `relative col-span-1`;
  return (
    <div className={str}>
      <Image src="https://www.w3schools.com/howto/img_avatar.png" width={250} height="250" alt={name} />
      <h4 className="py-2">{name}</h4>
      <p className="px-6">{responsibility}</p>
    </div>
  );
};

export default team;
