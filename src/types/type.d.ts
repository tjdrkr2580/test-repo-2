export type diaryType = {
  id: number;
  user: string;
  title: string;
  contents: string;
};

export type commentType = {
  id: number;
  postId: number;
  user: string;
  comment: string;
};

export interface ButtonProps {
  children: ReactNode;
  size: string;
  onClick: () => void;
}

export interface inputProps {
  wh: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

export interface commentProps {
  id: string | undefined;
}

export interface inputForm {
  id: string;
  password: string;
}
