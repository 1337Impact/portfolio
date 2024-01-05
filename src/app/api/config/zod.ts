import zod from "zod";
const schema = zod.object({
  name: zod.string().min(3).max(50),
  email: zod.string().email(),
  subject: zod.string().max(100),
  message: zod.string().min(5).max(1000),
});

export default schema;