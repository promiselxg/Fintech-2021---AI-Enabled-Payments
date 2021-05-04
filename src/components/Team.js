import { Container } from "@material-ui/core";
import "../style/Team.css";
import Members from "./Members";
const Team = () => {
  return (
    <main className="app__team">
      <Container maxWidth="lg">
        <div className="team">
          <h1>Team Members</h1>
          <p>Meet our team members</p>
          <div className="team__members" data-aos="fade-right">
            <Members
              Image="https://media-exp1.licdn.com/dms/image/C5603AQFwHGitMj421g/profile-displayphoto-shrink_200_200/0/1619795916464?e=1625702400&v=beta&t=DRXDM3WHQ4F-TCmi0V33Xsd9dE91lkxfZgY7VpMrR50"
              Name="Veranika Lämmlein"
            />
            <Members
              Image="https://trello-attachments.s3.amazonaws.com/6083294b0e8ade44abbd085a/60842ccc5f2f280543da9334/9b0d5896e8c89013fd49c014ebdf77d5/Picture.jpg"
              Name="Daniel Gonzalez"
            />
            <Members
              Image="https://i.stack.imgur.com/l60Hf.png"
              Name="Rashid Mvk"
            />
            <Members
              Image="https://media-exp1.licdn.com/dms/image/C4E03AQE2ql2m-XWlGA/profile-displayphoto-shrink_200_200/0/1528204453364?e=1625702400&v=beta&t=Uny4ZV5dlQhd1kGndgtKq37Ct5Ml6BLc9BS7b9NXuUU"
              Name="Daniela-Silvia Panica"
            />
            <Members
              Image="https://media-exp1.licdn.com/dms/image/C5603AQGj8mB7P5AHDw/profile-displayphoto-shrink_200_200/0/1575371669233?e=1625702400&v=beta&t=3IEXEMcXE8D84SZgl3AX34RKiYdhSqU1wqCRNxLvDfI"
              Name="Suresh Venkat"
            />
            <Members
              Image="https://media-exp1.licdn.com/dms/image/C4E03AQGa6eqWzvRn-g/profile-displayphoto-shrink_200_200/0/1579558301110?e=1625702400&v=beta&t=tM-V9WGDtKf5r59L4eLJHxu_KGJB9I6BCnJwUuCmC5I"
              Name="Pani Maddi"
            />
            <Members
              Image="https://trello-attachments.s3.amazonaws.com/6083294b0e8ade44abbd085a/60842ccc5f2f280543da9334/fd6d443111a600715675b28d51bbbb90/IMG_20191030_125930_0_1572450671164.jpg"
              Name="Anuforo Okechukwu Promise"
            />
            <Members
              Image="https://i.stack.imgur.com/l60Hf.png"
              Name="Mital Pattani"
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Team;
