---
title: "Vidar Overview"
slug: "vidar-encrypted-packaging-overview"
cover: ""
authors: [ SpaceGhost69 ]
needsAuth: false
date: "2024-10-06"
category: "valkyrai"
tags: [
    "Vidar",
    "Overview",
    "encryption",
    "security"
]
---

# Vidar

In Norse Mythology, Vidar is the child of Odin. As the son of Odin, Vidar is the half-brother of both Thor and Loki. Vidar is known for survival and silence, and unbreakable resiliance.

In this vein, our encrypted packaging tool Vidar will allow you to create impenetrable and resilient backup copies of your generated ThorAPI apps, creating a self-contained, self-extracting, encrypted executable jar.

Available as a command using ./vai, encrypting the project with vidar is as simple as supplying the password.

For an extremely secure file, you can generate a THORAPI secret key and use it as the password for the vidarchive.

To decrypt vidarchives, enter the command (with "vidar" being the default name of the encrypted archive)

```
java -jar vidar
```

This will create an "output" folder containing the generated project contents.

From here you can build and run your ThorAPI app.