# Security Audit and Dependency Status

**Project:** Gary Collins Culinary Portfolio  
**Technology:** React, TypeScript, Vite, Tailwind CSS  
**Audit Date:** November 17, 2026  
**Status:** Build verified; dependency vulnerability remains under review.

## 1. Security Audit Summary

An npm dependency security audit was performed to identify known vulnerabilities in the project's installed dependencies.

The audit identified high-severity findings associated with the `picomatch` package and dependent build-tool packages.

**Identified advisory:**
- Package: `picomatch`
- Severity: High
- Advisory: [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf)
- Vulnerability: Regular Expression Denial of Service (ReDoS) through single-branch repeated extglobs.
- Affected version range reported by npm: `<=4.0.7`
- Installed version: `4.0.7`

## 2. Affected Dependency Chain

The audit identified the following dependency paths:

```text
Vite
├── picomatch
└── tinyglobby
    ├── picomatch
    └── fdir
        └── picomatch

@vitejs/plugin-react
└── @rolldown/plugin-babel
    └── picomatch

typescript-eslint
└── @typescript-eslint/typescript-estree
    └── tinyglobby
        └── picomatch
```

These dependencies are associated with the development, linting, and production build toolchain.

## 3. Remediation Investigation

The following actions were performed:

- Executed `npm audit`.
- Executed `npm audit fix` without force.
- Reviewed the dependency tree using `npm ls`.
- Inspected installed package versions.
- Checked the available `picomatch` version through npm.
- Reviewed the suggested automatic remediation.

The npm registry reported `picomatch@4.0.7` as the latest available version during this investigation.

The automatic remediation suggested by npm involves major-version dependency changes, including a downgrade of Vite and the React plugin.

**Decision:** Do not apply forced dependency changes that could destabilize the existing application. Revisit remediation when compatible patched dependencies become available.

## 4. Build and Code Quality Verification

The following verification commands completed successfully on November 17, 2026:

| Command | Result |
|---|---|
| `npm run build` | PASS |
| `npm run lint` | PASS |

Production build details:

- Vite version: 8.3.8
- JavaScript bundle: 254.68 kB
- Gzipped JavaScript bundle: 77.24 kB
- TypeScript compilation: Successful
- Production build: Successful

No build or lint errors were reported.

## 5. Current Security Status

**Important:** The npm audit findings remain unresolved.

A successful build and lint check do not establish that all dependencies are free of known vulnerabilities.

The findings are currently associated with the project's dependency and build-tool chain. This does not establish that the deployed browser application is directly exploitable, but the build environment must still be monitored.

## 6. Follow-Up Actions

The following actions remain recommended:

1. Monitor the `picomatch` security advisory for a patched release.
2. Reassess the Vite and React plugin dependency chain when compatible updates become available.
3. Re-run `npm audit` after dependency updates.
4. Run `npm run build` and `npm run lint` after dependency changes.
5. Keep `package-lock.json` committed and synchronized with `package.json`.
6. Review Vercel deployment logs after deployment.
7. Update this document when the vulnerability is resolved.

## 7. Final Assessment

The culinary portfolio currently builds successfully, passes ESLint checks, and is suitable for continued deployment preparation.

However, the dependency security audit is not clean. The outstanding high-severity findings have been documented and require follow-up remediation.

**Last reviewed:** November 17, 2026