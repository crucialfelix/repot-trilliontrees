import {
  api,
  useGetData,
  PlantProjectSummary,
  PlantProjectPager,
} from "../../utils/api";
import FeaturedProject from "./FeaturedProject";

const FeaturedProjects = () => {
  // this generated api endpoint
  const { data, error } = useGetData<PlantProjectPager>(api.getFeatured, {});
  console.log("fp", data, error);
  // always undefined
  const projects = data?.merge?.plantProjectPager?.entities;
  if (!projects) return null;

  return (
    <div>
      {projects.map((project) => (
        <FeaturedProject data={project} />
      ))}
    </div>
  );
};

export default FeaturedProjects;
