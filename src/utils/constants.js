export const PAGE_SIZE = 10;

const deviceScreen = {
  mobileS: { min: '320px', max: '375px' },
  mobileM: { min: '375px', max: '425px' },
  mobileM2: { min: '425px', max: '500px' },
  mobileL: { min: '425px', max: '768px' },
  tablet: { min: '768px', max: '1024px' },
  laptop: { min: '1025px', max: '1440px' },
};

// export const DEVICE_MAX_W = {
//   mobileS: `(max-width: ${size.at(0).max})`,
//   mobileM: `(max-width: ${size.at(1).max})`,
//   mobileL: `(max-width: ${size.at(2).max})`,
//   tablet: `(max-width:  ${size.at(3).max})`,
//   laptop: `(max-width:  ${size.at(4).max})`,
// };

export const DEVICE_MAX_W = {
  mobileS: `(max-width: ${deviceScreen.mobileS.max})`,
  mobileM: `(max-width: ${deviceScreen.mobileM.max})`,
  mobileM2: `(max-width: ${deviceScreen.mobileM2.max})`,
  mobileL: `(max-width: ${deviceScreen.mobileL.max})`,
  tablet: `(max-width:  ${deviceScreen.tablet.max})`,
  laptop: `(max-width:  ${deviceScreen.laptop.max})`,
};

export const JS_ICON = { name: 'Javacript', iconName: 'logos:javascript' };
export const REACT_ICON = { name: 'React', iconName: 'logos:react' };
export const REACT_ROUTER_ICON = {
  name: 'React Router',
  iconName: 'devicon:reactrouter',
};
export const REACT_QUERY_ICON = {
  name: 'React Query',
  iconName: 'logos:react-query-icon',
};
export const REDUX_ICON = { name: 'Redux Toolkit', iconName: 'logos:redux' };
export const STYLED_COMP_ICON = {
  name: 'Styled Components',
  iconName: 'skill-icons:styledcomponents',
};
export const TAILWIND_ICON = {
  name: 'Tailwind',
  iconName: 'devicon:tailwindcss',
};
export const SUPABASE_ICON = {
  name: 'Supabase',
  iconName: 'logos:supabase-icon',
};
