import Link from "next/link";
import { useState } from "react";
export default function registor() {
  const [state, setState] = useState({
    fName: "",
    lName: "",
    gender: "",
    email: "",
    phone: "",
    college: "",
    semester: "",
    topic: "",
    food: null,
  });

  const onChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <>
      <section className="p-8 space-y-5">
        <h1 className="text-4xl text-center">Registeration</h1>
        <form onSubmit={onSubmit} className="space-y-3">
          {/* Name */}
          <div className="flex justify-between">
            <label htmlFor="fName">
              <p>First Name</p>
              <input type="text" name="fName" id="fName" placeholder="Krishna" value={state.fName} onChange={onChange} />
            </label>
            <label htmlFor="lName">
              <p>Last Name</p>
              <input type="text" name="lName" id="lName" placeholder="Nayak" value={state.lName} onChange={onChange} />
            </label>
          </div>
          {/* geneder */}

          <label htmlFor="gender">
            <p>Gender</p>
            <select className="w-full" name="gender" id="gender" value={state.gender} onChange={onChange}>
              <option value="" selected disabled hidden>
                Choose here
              </option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </label>
          {/* email */}
          <label htmlFor="email">
            <p>Email</p>
            <input type="email" name="email" id="email" placeholder="anc.abc@gita.com" value={state.email} onChange={onChange} />
          </label>
          {/* phone number */}
          <label htmlFor="phone-number">
            <p>Phone Number</p>
            <input type="number" name="phone" id="phone" placeholder="621XXXXXXX" value={state.phone} onChange={onChange} />
          </label>
          {/* college */}
          <label htmlFor="college">
            <p>College</p>
            <input type="test" name="college" id="college" placeholder="GITA" value={state.college} onChange={onChange} />
          </label>
          {/* Semester */}
          <label htmlFor="semester">
            <p>Semester</p>
            <input type="number" name="semester" id="semester" placeholder="3" value={state.semester} onChange={onChange} />
          </label>
          {/* topic */}
          <label htmlFor="topic">
            <p>Topic</p>
            <select className="w-full" name="topic" id="topic" value={state.topic} onChange={onChange}>
              {/* incrase the number of topic */}
              <option value="" selected disabled hidden>
                Choose here
              </option>

              <option value="Topic 1">Topic 1</option>

              <option value="Topic 2">Topic 2</option>
            </select>
          </label>
          <label htmlFor="food">
            <p>Food Type</p>
            <select className="w-full" name="food" id="food" value={state.food} onChange={onChange}>
              {/* incrase the number of topic */}
              <option value="" selected disabled hidden>
                Choose here
              </option>
              <option value="one">Veg</option>
              <option value="two">Non Veg</option>
            </select>
          </label>
          {/* button */}
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
