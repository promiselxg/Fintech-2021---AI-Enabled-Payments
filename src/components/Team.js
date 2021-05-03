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
          <div className="team__members">
            <Members
              Image="https://media-exp1.licdn.com/dms/image/C5603AQFwHGitMj421g/profile-displayphoto-shrink_200_200/0/1619795916464?e=1625702400&v=beta&t=DRXDM3WHQ4F-TCmi0V33Xsd9dE91lkxfZgY7VpMrR50"
              Name="Veranika Lämmlein"
            />
            <Members
              Image="https://media-exp1.licdn.com/dms/image/C4E35AQH-CKE16ZZQOQ/profile-framedphoto-shrink_200_200/0/1619905217451?e=1620144000&v=beta&t=1D_5RcVTjy5OLEkS6bP5yUo3RXfibDODUv8wPnuH5aI"
              Name="Daniel Gonzalez"
            />
            <Members
              Image="https://media-exp1.licdn.com/dms/image/C4D35AQHMyOyb8sMCZw/profile-framedphoto-shrink_200_200/0/1619779786336?e=1620144000&v=beta&t=weaZFhyLK2zVS6fwF2n8url-sHHu0CKnJ99qCc3_DxM"
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
              Image="https://media-exp1.licdn.com/dms/image/C5603AQFx5WEjMIgdhw/profile-displayphoto-shrink_200_200/0/1566554542158?e=1625702400&v=beta&t=O93s1KcHJGzofii6CnRKubgXu5MAzN9PAWK032r2BzM"
              Name="Anuforo Okechukwu Promise"
            />
            <Members
              Image="https://media-exp1.licdn.com/dms/image/C5603AQFQcfw_45MHwQ/profile-displayphoto-shrink_200_200/0/1616426909928?e=1623888000&v=beta&t=cuRlKqC1-v-KyQ9gi8vGmBGKcHVumj-LE4eLppXJwhA"
              Name="Mital Pattani"
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Team;
