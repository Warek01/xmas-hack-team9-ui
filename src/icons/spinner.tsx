import type { IconComponent } from '@/types/icon-component';

const Spinner: IconComponent = (props) => (
  <svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.69017 4.61729C7.5162 3.0384 9.89656 2.08331 12.5 2.08331C18.2529 2.08331 22.9167 6.74701 22.9167 12.5C22.9167 14.7251 22.219 16.7873 21.0304 18.4798L17.7083 12.5H20.8333C20.8333 7.8976 17.1024 4.16665 12.5 4.16665C10.2602 4.16665 8.22684 5.05026 6.7294 6.48792L5.69017 4.61729ZM19.3098 20.3827C17.4837 21.9615 15.1034 22.9166 12.5 22.9166C6.74703 22.9166 2.08333 18.2529 2.08333 12.5C2.08333 10.2748 2.78103 8.21265 3.96958 6.52023L7.29166 12.5H4.16666C4.16666 17.1024 7.89762 20.8333 12.5 20.8333C14.7398 20.8333 16.7731 19.9497 18.2706 18.5121L19.3098 20.3827Z"
      fill="#25363E"
    />
  </svg>
);

export default Spinner;