/**
 * DeepSeek Harness bundle adapter for mattpocock-skills.
 *
 * Uses the host-owned filesystem skill provider, isolated to this package's
 * canonical skills/ tree. It does not copy skill bodies elsewhere, replace the
 * native skill tool, or add runtime authority.
 */

import { fileURLToPath } from "node:url";
import { apply as applyFilesystemProvider } from "@deepseek-ai/dsh-skill-filesystem";

const skillsRoot = fileURLToPath(new URL("../../skills/", import.meta.url));

export const name = "mattpocock-skills-dsh";
export const inject = ["skills"];

export function apply(ctx) {
  applyFilesystemProvider(ctx, {
    providerName: "mattpocock-skills-dsh",
    includeDefaultRoots: false,
    bundledSkillDir: skillsRoot,
    watch: false,
  });
}
