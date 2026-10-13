
import React, { useEffect, useState } from "react";

import {
  ArrowUpRight,
  GitFork,
  Star,
  Code2,
  ExternalLink,
} from "lucide-react";

import { SectionTitle } from "./shared.jsx";
import { githubUsername } from "../data/portfolio.js";

export default function GithubSection() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`,
          {
            signal: controller.signal,
            headers: {
              Accept: "application/vnd.github+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("GitHub API unavailable");
        }

        const data = await response.json();

        setRepos(
          data
            .filter((repo) => !repo.fork)
            .slice(0, 4)
        );

        setStatus("ready");
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus("error");
        }
      }
    }

    loadRepos();

    return () => controller.abort();
  }, []);

  return (
    <section
      className="section-shell section-block github-section"
      id="github"
    >
      <SectionTitle
        index="07"
        eyebrow="PUBLIC CODE"
        title={
          <>
            From the{" "}
            <span className="serif-accent">
              repository.
            </span>
          </>
        }
        description="A live snapshot of public repositories from GitHub's public API. Data may be temporarily unavailable if the API is rate-limited."
      />

      <div className="github-panel">
        <div className="github-panel-head">
          <div className="github-profile-mark">
            <Code2 size={24} />
          </div>

          <div>
            <h3>@{githubUsername}</h3>
            <p>Public repositories · fetched live</p>
          </div>

          <a
            className="text-link"
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noreferrer"
          >
            View profile
            <ArrowUpRight size={15} />
          </a>
        </div>

        {status === "loading" && (
          <div className="github-state">
            <span className="loading-spinner" />
            Loading public repositories…
          </div>
        )}

        {status === "error" && (
          <div className="github-state">
            <p>
              Repository data is temporarily unavailable.
              You can still browse the profile directly.
            </p>

            <a
              className="button button-outline"
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noreferrer"
            >
              Open GitHub
              <ExternalLink size={15} />
            </a>
          </div>
        )}

        {status === "ready" && repos.length === 0 && (
          <div className="github-state">
            No public non-fork repositories were returned.
            Visit the profile to see the latest code.
          </div>
        )}

        {status === "ready" && repos.length > 0 && (
          <div className="repo-grid">
            {repos.map((repo) => (
              <article
                className="repo-card"
                key={repo.id}
              >
                <div className="repo-card-top">
                  <Code2 size={17} />
                  <span>Public</span>
                </div>

                <h4>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {repo.name}
                    <ArrowUpRight size={13} />
                  </a>
                </h4>

                <p>
                  {repo.description ||
                    "No description added yet."}
                </p>

                <div className="repo-meta">
                  {repo.language && (
                    <span className="repo-language">
                      <i />
                      {repo.language}
                    </span>
                  )}

                  <span>
                    <Star size={13} />
                    {repo.stargazers_count}
                  </span>

                  <span>
                    <GitFork size={13} />
                    {repo.forks_count}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="github-panel-foot">
          <span>
            Public data only · No invented counts
          </span>

          <span>
            Data is fetched when this section loads
          </span>
        </div>
      </div>
    </section>
  );
}
