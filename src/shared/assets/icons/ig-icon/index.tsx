import { FC } from "react";

type IgIconProps = {
  width?: string;
  height?: string;
  fill?: string;
};

const IgIcon: FC<IgIconProps> = ({
  width = "24",
  height = "24",
  fill = "white",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C9.28154 2 8.94274 2.01313 7.87886 2.05813C6.8106 2.11064 6.08801 2.27628 5.45043 2.52382C4.78314 2.77573 4.17881 3.17016 3.67958 3.67958C3.16874 4.17765 2.77409 4.78231 2.52382 5.45043C2.27628 6.08801 2.11064 6.8106 2.05813 7.87886C2.01 8.94337 2 9.28154 2 12C2 14.7185 2.01313 15.0573 2.05813 16.1211C2.11064 17.1863 2.27628 17.912 2.52382 18.5496C2.77573 19.2169 3.17016 19.8212 3.67958 20.3204C4.17765 20.8313 4.78231 21.2259 5.45043 21.4762C6.08801 21.7206 6.81373 21.8894 7.87886 21.9419C8.94337 21.99 9.28154 22 12 22C14.7185 22 15.0573 21.9869 16.1211 21.9419C17.1863 21.8894 17.912 21.72 18.5496 21.4762C19.2169 21.2243 19.8212 20.8298 20.3204 20.3204C20.8319 19.8229 21.2267 19.2181 21.4762 18.5496C21.7206 17.912 21.8894 17.1863 21.9419 16.1211C21.99 15.0566 22 14.7185 22 12C22 9.28154 21.9869 8.94274 21.9419 7.87886C21.8894 6.81373 21.72 6.08426 21.4762 5.45043C21.2243 4.78314 20.8298 4.17881 20.3204 3.67958C19.8229 3.16808 19.2181 2.77333 18.5496 2.52382C17.912 2.27628 17.1863 2.11064 16.1211 2.05813C15.0566 2.01 14.7185 2 12 2ZM12 3.80023C14.6697 3.80023 14.9885 3.81335 16.0436 3.85836C17.0169 3.90399 17.5469 4.06651 17.8989 4.20403C18.3339 4.36462 18.7277 4.62023 19.0515 4.95224C19.383 5.27468 19.6376 5.66755 19.7966 6.10176C19.9341 6.45368 20.0966 6.98375 20.1423 7.95699C20.1873 9.01213 20.2004 9.33154 20.2004 12.0006C20.2004 14.6697 20.1873 14.9891 20.1385 16.0443C20.086 17.0175 19.9235 17.5476 19.7866 17.8995C19.5972 18.3689 19.3859 18.6971 19.0371 19.0521C18.7122 19.3821 18.3187 19.6364 17.8845 19.7972C17.5369 19.9347 16.9994 20.0973 16.0224 20.1429C14.9616 20.1879 14.6491 20.201 11.9725 20.201C9.29591 20.201 8.984 20.1879 7.92199 20.1391C6.94874 20.0866 6.4118 19.9241 6.05988 19.7872C5.58482 19.5978 5.25916 19.3865 4.91036 19.0378C4.55844 18.6858 4.33467 18.3508 4.16215 17.8851C4.02213 17.5376 3.86211 17 3.81023 16.023C3.7746 14.9747 3.75772 14.6497 3.75772 11.9856C3.75772 9.32279 3.7746 8.99712 3.81023 7.93574C3.86211 6.95875 4.02213 6.42243 4.16215 6.07363C4.33467 5.59795 4.55907 5.27291 4.91036 4.92099C5.25853 4.57282 5.58482 4.34779 6.05988 4.17152C6.4118 4.03463 6.93562 3.87211 7.91261 3.82335C8.97337 3.78522 9.28591 3.77147 11.9587 3.77147L12 3.80023ZM12 6.86748C11.3258 6.86724 10.6581 6.99986 10.0351 7.25777C9.41213 7.51567 8.84609 7.89382 8.36933 8.37058C7.89257 8.84734 7.51442 9.41338 7.25652 10.0364C6.99861 10.6593 6.86599 11.327 6.86623 12.0013C6.86599 12.6755 6.99861 13.3432 7.25652 13.9661C7.51442 14.5891 7.89257 15.1552 8.36933 15.6319C8.84609 16.1087 9.41213 16.4868 10.0351 16.7447C10.6581 17.0026 11.3258 17.1353 12 17.135C12.6742 17.1353 13.3419 17.0026 13.9649 16.7447C14.5879 16.4868 15.1539 16.1087 15.6307 15.6319C16.1074 15.1552 16.4856 14.5891 16.7435 13.9661C17.0014 13.3432 17.134 12.6755 17.1338 12.0013C17.134 11.327 17.0014 10.6593 16.7435 10.0364C16.4856 9.41338 16.1074 8.84734 15.6307 8.37058C15.1539 7.89382 14.5879 7.51567 13.9649 7.25777C13.3419 6.99986 12.6742 6.86724 12 6.86748ZM12 15.3348C10.1573 15.3348 8.66646 13.844 8.66646 12.0013C8.66646 10.1585 10.1573 8.66771 12 8.66771C13.8427 8.66771 15.3335 10.1585 15.3335 12.0013C15.3335 13.844 13.8427 15.3348 12 15.3348ZM18.5408 6.66246C18.5405 6.98104 18.4137 7.28646 18.1883 7.51161C17.9629 7.73676 17.6574 7.86323 17.3388 7.86323C17.1813 7.86323 17.0253 7.83221 16.8798 7.77192C16.7342 7.71164 16.602 7.62329 16.4906 7.5119C16.3792 7.40051 16.2909 7.26828 16.2306 7.12275C16.1703 6.97721 16.1393 6.82123 16.1393 6.66371C16.1393 6.50618 16.1703 6.3502 16.2306 6.20467C16.2909 6.05914 16.3792 5.9269 16.4906 5.81552C16.602 5.70413 16.7342 5.61577 16.8798 5.55549C17.0253 5.49521 17.1813 5.46418 17.3388 5.46418C17.9995 5.46418 18.5408 6.00175 18.5408 6.66246Z"
      fill={fill}
    />
  </svg>
);

export default IgIcon;
