const user1 = {
  name: "Satyam",
  age: 22,
  city: "Ahmedabad",
};

const user2 = {
  profile: {
    name: "Satyam",
    city: "Ahmedabad",
  },
};
export const ProfileCard = () => {
    const {name,age,city}=user1;
    const {profile:{name:u2name,city:u2city}}=user2
  return (
    <div>
        {name}{age}{city}
        {u2name}{u2city}
    </div>
  )
}
