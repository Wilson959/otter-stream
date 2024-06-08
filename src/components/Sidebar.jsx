import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      flex: 1,
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
      width: "250px",
      backgroundColor: "var(--bg-secondary)",
      p: { sx: 0, md: 2 },
    }}
  >
    {categories.map((category, index) => {
      const Icon = category.icon;

      return (
        <button
          key={Math.random() + index}
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background:
              category.name === selectedCategory && "var(--text-primary-dark)",
            color: "#fff",
          }}
        >
          <span
            style={{
              color:
                category.name === selectedCategory
                  ? "#fff"
                  : "var(--text-primary-dark)",
              marginRight: "15px",
            }}
          >
            <Icon />
          </span>
          <span
            className={
              category.name !== selectedCategory ? "category-btn-hover" : ""
            }
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      );
    })}
  </Stack>
);

export default Sidebar;
