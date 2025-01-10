"use client";

import { Link } from "./LinkButton.styles";
import { useState } from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions.hook";
import { useRouter } from "next/navigation";

export default function LinkButton() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [focus, setFocus] = useState(false);

  return (
    <Link
      width={width || 1440}
      focus={focus}
      onClick={() => {
        setFocus(true);
        router.push("/me-contacter");
      }}
    >
      Me contacter
    </Link>
  );
}
