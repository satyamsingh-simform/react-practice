import { LoadingWrapper } from "./LoadingWrapper";

interface UserProfileProps {
  loading: boolean;
  name: string;
  email: string;
  avatarUrl: string;
  bio: string;
  followers: number;
}

// Also receives `loading` but does NOT handle it
export const UserProfile: React.FC<UserProfileProps> = ({ name, email, avatarUrl, bio, followers,loading}) => {
  return (
    <LoadingWrapper loading={loading}>
        <div className="user-profile">
            <img src={avatarUrl} alt={name} />
            <h2>{name}</h2>
            <p className="email">{email}</p>
            <p className="bio">{bio}</p>
            <span className="followers">{followers} followers</span>
        </div>
    </LoadingWrapper>
    
  );
};