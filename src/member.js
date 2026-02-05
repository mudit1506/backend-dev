import fs from "fs";
function registerMember(memberId, name, membershipType) {
  try {
    let members=[];
    const newMember={

      memberId:new Date(),
      name,
      membershipType 
    };
  if (fs.existsSync("members.json")) {
      let data = JSON.parse(fs.readFileSync("members.json", "utf-8"));
      let isMemberExists = data.some((value) => value.memberId === memberId);
      if (isMemberExists) {
        return "Member already exists";
      }
      members = data;
    }

    members.push(newMember);

    fs.writeFileSync("members.json",JSON.stringify(members, null, 2));
    return "Member registered successfully";
  } 
  catch (err) {
    console.log(err);
  }
}
export default registerMember;