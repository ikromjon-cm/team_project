export default function Team() {
  const members = [
    {
      name: "Jason Price",
      role: "Admin",
      email: "janick_parisian@yahoo.com",
    },
    {
      name: "Jukkoe Sisao",
      role: "CEO",
      email: "sibyl_kozey@gmail.com",
    },
    {
      name: "Harriet King",
      role: "CTO",
      email: "nadia_block@hotmail.com",
    },
    {
      name: "Lenora Benson",
      role: "Lead",
      email: "feil.wallace@kunde.us",
    },
    {
      name: "Olivia Reese",
      role: "Strategist",
      email: "kemmer.hattie@cremin.us",
    },
    {
      name: "Bertha Valdez",
      role: "CEO",
      email: "loraine.koelpin@tromp.io",
    },
    {
      name: "Harriett Payne",
      role: "Digital Marketer",
      email: "nannie.west@estrella.tv",
    },
    {
      name: "George Bryant",
      role: "Social Media",
      email: "delmer.king@gmail.com",
    },
    {
      name: "Lily French",
      role: "Strategist",
      email: "lucienne.herman@hotmail.com",
    },
    {
      name: "Howard Adkins",
      role: "CEO",
      email: "wiegan.leonore@herman.us",
    },
    {
      name: "Earl Bowman",
      role: "Digital Marketer",
      email: "wanita_altenwerth@nicolette.tv",
    },
    {
      name: "Patrick Padilla",
      role: "Social Media",
      email: "octavia.nienow@gleicher.net",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Team</h2>
        <button style={{
            padding : "15px 10px",
            background: "rgb(0, 123, 255)",
            borderRadius: "6px",
        }}
        >Add New Member</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {members.map((m, i) => (
          <div
            key={i}
            style={{
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              background: "#f5f5f5",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "#ccc",
                margin: "0 auto 10px",
              }}
            ></div>

            <h4 style={{ margin: "5px 0" }}>{m.name}</h4>
            <p style={{ margin: "5px 0", color: "gray" }}>{m.role}</p>
            <p style={{ margin: "5px 0", fontSize: "12px" }}>{m.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
