export const LocationIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-5 h-5'>
    <defs>
      <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
        <stop offset='0%' stopColor='#969699' />
        <stop offset='100%' stopColor='#1e1e22' />
      </linearGradient>
    </defs>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
      stroke='url(#gradient)'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
      stroke='url(#gradient)'
    />
  </svg>
);

export const AcademicCap = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='inline-block ml-2 w-5 h-5'>
    <defs>
      <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
        <stop offset='0%' stopColor='#969699' />
        <stop offset='100%' stopColor='#1e1e22' />
      </linearGradient>
    </defs>
    <path
      stroke='url(#gradient)'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
    />
  </svg>
);

export const ChipIcon = ({
  className,
  style,
}: {
  className?: string;
  style: any;
}) => (
  <svg
    style={style}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={`w-5 h-5 ` + className}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z'
    />
  </svg>
);

export const ComputerIcon = ({
  className,
  style,
}: {
  className?: string;
  style: any;
}) => (
  <svg
    style={style}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={`w-5 h-5 ` + className}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
    />
  </svg>
);

export const CalculatorIcon = ({
  className,
  style,
}: {
  className?: string;
  style: any;
}) => (
  <svg
    style={style}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={`w-5 h-5 ` + className}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z'
    />
  </svg>
);

export const DBIcon = ({
  className,
  style,
}: {
  className?: string;
  style: any;
}) => (
  <svg
    style={style}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={`w-5 h-5 ` + className}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
    />
  </svg>
);

export const CodeBracket = ({
  className,
  style,
}: {
  className?: string;
  style: any;
}) => (
  <svg
    style={style}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={`w-5 h-5 ` + className}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z'
    />
  </svg>
);

export const ServerIcon = ({
  className,
  style,
}: {
  className?: string;
  style: any;
}) => (
  <svg
    style={style}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={`w-5 h-5 ` + className}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z'
    />
  </svg>
);

export const BarIcon = ({ className }: { className?: string }) => (
  <svg
    aria-label='Open menu'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={className}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
    />
  </svg>
);

export const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg
    className={`w-5 h-5 ` + className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    id='leetcode'>
    <path
      fill='#B3B1B0'
      d='M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z'></path>
    <path
      fill='#E7A41F'
      d='m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z'></path>
    <path
      fill='#070706'
      d='M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z'></path>
  </svg>
);

export const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    className={`w-5 h-5 ` + className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    id='github'>
    <g data-name='Github 1'>
      <g data-name='<Group>'>
        <path
          fill='none'
          stroke='#303c42'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 .5A11.5 11.5 0 0 0 .5 12a11.82 11.82 0 0 0 9 11.5v-3h-1c-2.62 0-3.54-4-5-4 2.79 0 3.33 2 5 2a.89.89 0 0 0 1-1v-.35c-2.91-.82-5-3-5-5.65a5.26 5.26 0 0 1 1.57-3.66A3.16 3.16 0 0 1 6.5 4.5 5.26 5.26 0 0 1 8.88 6a9.14 9.14 0 0 1 6.24 0 5.26 5.26 0 0 1 2.38-1.5 3.16 3.16 0 0 1 .43 3.34 5.26 5.26 0 0 1 1.57 3.66c0 2.74-2.29 5-5.42 5.76a4.68 4.68 0 0 1 .42 2.24v4a11.82 11.82 0 0 0 9-11.5A11.5 11.5 0 0 0 12 .5Z'
          data-name='<Path>'></path>
      </g>
    </g>
  </svg>
);

export const CodeForces = ({ className }: { className?: string }) => (
  <svg
    className={`w-5 h-5 ` + className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    id='code-forces'>
    <path
      fill='#F44336'
      d='M24 19.5V12a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 18 12v7.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z'></path>
    <path
      fill='#2196F3'
      d='M13.5 21a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 13.5 3h-3C9.673 3 9 3.672 9 4.5v15c0 .828.673 1.5 1.5 1.5h3z'></path>
    <path
      fill='#FFC107'
      d='M0 19.5c0 .828.673 1.5 1.5 1.5h3A1.5 1.5 0 0 0 6 19.5V9a1.5 1.5 0 0 0-1.5-1.5h-3C.673 7.5 0 8.172 0 9v10.5z'></path>
  </svg>
);

export const HackerRank = ({ className }: { className?: string }) => (
  <svg
    className={`w-5 h-5 ` + className}
    xmlns='http://www.w3.org/2000/svg'
    enableBackground='new 0 0 24 24'
    viewBox='0 0 24 24'
    id='hackerrank'>
    <path
      fill='#2FC363'
      d='M11.999,0C10.626,0,2.195,4.818,1.514,6c-0.683,1.182-0.687,10.819,0,12c0.685,1.181,9.114,6,10.485,6c1.37,0,9.8-4.823,10.487-6c0.687-1.176,0.687-10.83,0-12C21.799,4.83,13.371,0,11.999,0L11.999,0z M14.84,19.415v0.002c-0.188,0-1.938-1.677-1.8-1.814c0.041-0.041,0.296-0.069,0.832-0.086c0-1.23,0.027-3.215,0.044-4.046c0.002-0.095-0.021-0.161-0.021-0.273h-3.787c0,0.333-0.022,1.697,0.064,3.416c0.012,0.213-0.074,0.279-0.271,0.278c-0.48-0.001-0.96-0.005-1.441-0.004c-0.194,0-0.278-0.073-0.271-0.286c0.043-1.567,0.141-3.938-0.008-9.969V6.483C7.724,6.468,7.404,6.438,7.364,6.397C7.225,6.26,9,4.583,9.187,4.583c0.188,0,1.951,1.677,1.813,1.814c-0.041,0.041-0.374,0.07-0.795,0.086v0.148c-0.113,1.207-0.096,3.731-0.124,4.941h3.803c0-0.214,0.019-1.629-0.057-3.922c-0.005-0.159,0.046-0.242,0.199-0.244c0.524-0.004,1.049-0.006,1.574-0.003c0.164,0.001,0.217,0.08,0.214,0.252c-0.173,8.967-0.032,8.341-0.032,9.86c0.42,0.016,0.796,0.045,0.838,0.086C16.757,17.737,15.027,19.415,14.84,19.415L14.84,19.415z'></path>
    <path
      fill='#DEDEDE'
      d='M9.187,4.583C9,4.583,7.225,6.26,7.364,6.397c0.041,0.041,0.36,0.07,0.817,0.086v0.149c0.149,6.031,0.051,8.402,0.008,9.969c-0.007,0.214,0.077,0.286,0.271,0.286c0.067,0,0.134,0,0.201,0c0.413,0,0.826,0.003,1.24,0.004c0.001,0,0.003,0,0.004,0c0.194,0,0.279-0.067,0.268-0.278c-0.087-1.719-0.064-3.083-0.064-3.416H12v-1.626h-1.919c0.028-1.209,0.011-3.734,0.124-4.941V6.483C10.626,6.468,10.959,6.438,11,6.397C11.138,6.26,9.374,4.583,9.187,4.583L9.187,4.583z'></path>
    <path
      fill='#29AA56'
      d='M11.999,0C10.626,0,2.195,4.818,1.514,6c-0.683,1.182-0.687,10.819,0,12c0.685,1.181,9.114,6,10.485,6l0,0H12V13.198h-1.892c0,0.333-0.022,1.697,0.064,3.416c0.012,0.211-0.073,0.278-0.268,0.278c-0.001,0-0.002,0-0.004,0c-0.413-0.001-0.826-0.004-1.24-0.004c-0.067,0-0.134,0-0.201,0c-0.194,0-0.278-0.073-0.271-0.286c0.043-1.567,0.141-3.938-0.008-9.969V6.483C7.724,6.468,7.404,6.438,7.364,6.397C7.225,6.26,9,4.583,9.187,4.583c0.188,0,1.951,1.677,1.813,1.814c-0.041,0.041-0.374,0.07-0.795,0.086v0.148c-0.113,1.207-0.096,3.731-0.124,4.941H12L11.999,0L11.999,0L11.999,0z'></path>
  </svg>
);

export const FBIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={`w-5 h-5 `}
    viewBox='0 0 48 48'
    fill='none'>
    <circle cx='24' cy='24' r='20' fill='#3B5998' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z'
      fill='white'
    />
  </svg>
);

export const EmailIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={`w-5 h-5 `}
    aria-label='Gmail'
    role='img'
    viewBox='0 0 512 512'>
    <rect width='512' height='512' rx='15%' fill='#ffffff' />
    <path fill='#f2f2f2' d='M120 392V151.075h272V392' />
    <path fillOpacity='.05' d='M256 285L120 392l-4-212' />
    <path fill='#d54c3f' d='M120 392H97c-12 0-22-10-22-23V143h45z' />
    <path fillOpacity='.08' d='M317 392h77V159H82' />
    <path fill='#f2f2f2' d='M97 121h318L256 234' />
    <path fill='#b63524' d='M392 392h23c12 0 22-10 22-23V143h-45z' />
    <path
      fill='none'
      stroke='#de5145'
      strokeLinecap='round'
      strokeWidth='44'
      d='M97 143l159 115 159-115'
    />
  </svg>
);

export const TwitterIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={`w-5 h-5 `}
    viewBox='0 -4 48 48'
    version='1.1'>
    <title>Twitter-color</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id='Icons' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g
        id='Color-'
        transform='translate(-300.000000, -164.000000)'
        fill='#00AAEC'>
        <path
          d='M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283'
          id='Twitter'></path>
      </g>
    </g>
  </svg>
);

export const ArrowUpRight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='35px'
    height='35px'
    viewBox='0 0 24 24'
    fill='none'
    className='inline-block'>
    <g id='Arrow / Arrow_Up_Right_SM'>
      <path
        id='Vector'
        d='M8 16L16 8M16 8H10M16 8V14'
        stroke='#525255'
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
);

export const ArrowRight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='inline-block w-5 h-5'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
    />
  </svg>
);

export const CrossIcon = ({ className }: { className: string }) => (
  <svg
    aria-label='close menu'
    xmlns='http://www.w3.org/2000/svg'
    data-name='Layer 1'
    viewBox='0 0 64 64'
    className={className}>
    <line
      x1='9.37'
      x2='54.63'
      y1='9.37'
      y2='54.63'
      fill='none'
      stroke='#010101'
      strokeMiterlimit='10'
      strokeWidth='4'
    />
    <line
      x1='9.37'
      x2='54.63'
      y1='54.63'
      y2='9.37'
      fill='none'
      stroke='#010101'
      strokeMiterlimit='10'
      strokeWidth='4'
    />
  </svg>
);

export const CVIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='inline-block w-5 h-5'
    viewBox='0 0 64 64'>
    <g id='Layer_42' data-name='Layer 42'>
      <path d='M44.74,12.27H25.41a4.61,4.61,0,0,0-4.6,4.6V31.4H15.26a.6.6,0,0,0-.6.6v16a3.68,3.68,0,0,0,3.68,3.68h26.4a4.61,4.61,0,0,0,4.6-4.6V16.87A4.61,4.61,0,0,0,44.74,12.27ZM15.86,48.05V32.6h4.95V48.05a2.48,2.48,0,1,1-4.95,0Zm32.28-.92a3.41,3.41,0,0,1-3.4,3.4H22V16.87a3.41,3.41,0,0,1,3.4-3.4H44.74a3.41,3.41,0,0,1,3.4,3.4Z' />
      <path d='M28.47,25.32a5.83,5.83,0,0,0,4.35-2,.63.63,0,0,0,.14-.54,4.6,4.6,0,0,0-2.61-3.11,2.66,2.66,0,1,0-4.54-1.88,2.7,2.7,0,0,0,.77,1.88A4.56,4.56,0,0,0,24,22.78a.6.6,0,0,0,.15.61A5.8,5.8,0,0,0,28.47,25.32ZM27,17.83a1.46,1.46,0,1,1,1.46,1.46h0A1.46,1.46,0,0,1,27,17.83Zm1.46,2.66h0A3.41,3.41,0,0,1,31.7,22.8a4.62,4.62,0,0,1-6.47,0A3.42,3.42,0,0,1,28.47,20.49Z' />
      <path d='M35.78,18.44h3.51a.61.61,0,0,0,0-1.21H35.78a.61.61,0,0,0,0,1.21Z' />
      <path d='M35.78,22.33H45.3a.6.6,0,0,0,0-1.2H35.78a.6.6,0,1,0,0,1.2Z' />
      <path d='M45.44,27.79H24.71a.6.6,0,1,0,0,1.2H45.44a.6.6,0,0,0,0-1.2Z' />
      <path d='M45.44,32.18H24.71a.6.6,0,1,0,0,1.2H45.44a.6.6,0,0,0,0-1.2Z' />
      <path d='M45.44,36.57H24.71a.6.6,0,1,0,0,1.2H45.44a.6.6,0,0,0,0-1.2Z' />
      <path d='M45.44,41H24.71a.6.6,0,0,0-.6.6.6.6,0,0,0,.6.6H45.44a.6.6,0,0,0,.6-.6A.6.6,0,0,0,45.44,41Z' />
      <path d='M45.44,45.35H24.71a.6.6,0,0,0-.6.6.6.6,0,0,0,.6.6H45.44A.6.6,0,0,0,46,46,.6.6,0,0,0,45.44,45.35Z' />
      <path d='M32,60.6A28.6,28.6,0,1,1,60.6,32,28.63,28.63,0,0,1,32,60.6Zm0-56A27.4,27.4,0,1,0,59.4,32,27.43,27.43,0,0,0,32,4.6Z' />
    </g>
  </svg>
);

export const PhoneIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='inline-block w-5 h-5'
    version='1.1'
    id='Layer_1'
    x='0px'
    y='0px'
    viewBox='0 0 57.4 57'
    enableBackground='new 0 0 57.4 57'>
    <g>
      <path
        fill='#111B44'
        d='M52.7,13.2c15.1,27-12.4,54.6-39.5,39.5c-3.4-1.9-6.2-4.7-8.1-8.1C-10,17.5,17.5-10.1,44.6,5   C48,7,50.8,9.8,52.7,13.2z'
      />
      <g>
        <path
          fill='#FFFFFF'
          d='M40.6,35.8c-1.3-1.3-3.4-1.5-4.9-0.4l-3.4,2.1c0,0-2.2,0.9-8-4.9c-5.7-5.8-4.9-7.9-4.9-7.9v0l2.1-3.4    c1.1-1.5,1-3.6-0.3-4.9l-3.2-3.2c-0.8-0.8-1.8-1.2-2.9-1.1c-1.1,0.1-2.1,0.6-2.8,1.5c0,0,0,0,0,0l-1.6,2.6    c-0.3,0.4-6.4,9.1,7.2,22.7c0,0,0.1,0.1,0.1,0.1c7.1,7,12.9,8.8,16.8,8.8c3.6,0,5.7-1.5,5.9-1.6l2.7-1.7c0.9-0.7,1.4-1.7,1.5-2.8    c0.1-1.1-0.3-2.2-1.1-2.9L40.6,35.8z'
        />
        <path
          fill='#FFFFFF'
          d='M35.8,28.7c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2c2.2-2.2,2.2-5.9,0-8.1c-2.2-2.2-5.9-2.2-8.1,0    c-0.2,0.2-0.2,0.6,0,0.9c0.2,0.2,0.6,0.2,0.9,0c1.7-1.7,4.6-1.7,6.3,0c1.7,1.7,1.7,4.6,0,6.3C35.6,28,35.6,28.4,35.8,28.7z'
        />
        <path
          fill='#FFFFFF'
          d='M38.6,31.2c0.2,0,0.3-0.1,0.4-0.2c3.5-3.5,3.5-9.2,0-12.7c-3.5-3.5-9.2-3.5-12.7,0c-0.2,0.2-0.2,0.6,0,0.9    c0.2,0.2,0.6,0.2,0.9,0c1.5-1.5,3.4-2.3,5.5-2.3c2.1,0,4,0.8,5.5,2.3c3,3,3,7.9,0,10.9c-0.2,0.2-0.2,0.6,0,0.9    C38.2,31.1,38.4,31.2,38.6,31.2z'
        />
        <path
          fill='#FFFFFF'
          d='M24.9,16.8c2.1-2.1,4.9-3.2,7.8-3.2c2.9,0,5.7,1.1,7.8,3.2c4.3,4.3,4.3,11.3,0,15.6    c-0.2,0.2-0.2,0.6,0,0.9c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2c4.8-4.8,4.8-12.6,0-17.3c-2.3-2.3-5.4-3.6-8.7-3.6    c-3.3,0-6.4,1.3-8.7,3.6c-0.2,0.2-0.2,0.6,0,0.9C24.2,17.1,24.6,17.1,24.9,16.8z'
        />
      </g>
    </g>
  </svg>
);

export const RocketIcon = () => (
  <svg
    className='w-4 h-4'
    width='15'
    height='15'
    viewBox='0 0 15 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z'
      fill='currentColor'
      fillRule='evenodd'
      clipRule='evenodd'></path>
  </svg>
);

export const Cross2Icon = () => (
  <svg
    className='w-4 h-4'
    width='15'
    height='15'
    viewBox='0 0 15 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z'
      fill='currentColor'
      fillRule='evenodd'
      clipRule='evenodd'></path>
  </svg>
);

export const StackblitzIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={`w-5 h-5 ` + className}
    viewBox='0 0 28 28'
    aria-hidden='true'
    height='24'
    width='24'
    fill='#1389fd'>
    <path d='M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z'></path>
  </svg>
);

export const ReplItIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={`w-5 h-5 ${className}`}
    height='24'
    width='24'
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10 11.5C10 10.6716 10.6716 10 11.5 10H18.5C19.3284 10 20 10.6716 20 11.5V18H11.5C10.6716 18 10 17.3284 10 16.5V11.5Z'
      fill='#F26207'></path>
    <path
      d='M20 18H28.5C29.3284 18 30 18.6716 30 19.5V24.5C30 25.3284 29.3284 26 28.5 26H20V18Z'
      fill='#F26207'></path>
    <path
      d='M10 27.5C10 26.6716 10.6716 26 11.5 26H20V32.5C20 33.3284 19.3284 34 18.5 34H11.5C10.6716 34 10 33.3284 10 32.5V27.5Z'
      fill='#F26207'></path>
  </svg>
);

export const SearchIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='w-5 h-5 text-gray-200'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
      />
    </svg>
  );
};

export const EditIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-5 h-5 text-gray-900'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
      />
    </svg>
  );
};
