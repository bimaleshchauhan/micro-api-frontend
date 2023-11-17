const loginForm = [
    {
      type: "email",
      required: true,
      value: "",
      validate: [
        {
          name: "required",
          message: "Email address is required",
        },
        {
          name: "regex",
          message: "Email address is invalid",
          expression:
            "/^([A-Za-z0-9]+[_.]?)+[A-Za-z0-9]+@[a-zA-Z_]+?([.][a-zA-Z]{2,3}){1,2}$/",
        },
      ],
    },
    {
      type: "password",
      required: true,
      value: "",
      validate: [
        {
          name: "required",
          message: "Password is required",
        },
      ],
    },
  ];

  export {loginForm}